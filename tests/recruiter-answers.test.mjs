import {test} from 'node:test';
import assert from 'node:assert/strict';
import {require} from './register.mjs';
const {findProfileFacts,buildFactSelectionPrompt,askGroq,resolveFactSelection}=require('../lib/ask.ts');
const {approvedFacts}=require('../lib/profile-facts.ts');

const questions=[
 ['Why should we hire him?','recruiter.fit'],
 ['Why shouwd we hire him?','recruiter.fit'],
 ['Why should we hire Shivam?','recruiter.fit'],
 ['What are his strengths?','recruiter.fit'],
 ['What does he bring to the team?','recruiter.fit'],
 ['What makes him a good candidate?','recruiter.fit'],
 ['What makes him a good fit for a full stack role?','recruiter.roles'],
 ['What roles is he suited for?','recruiter.roles'],
 ['Tell me about yourself','recruiter.summary'],
 ['What do you do?','recruiter.summary'],
 ['What can he offer?','recruiter.summary'],
 ['Who are you?','recruiter.summary'],
 ['Give me an elevator pitch','recruiter.summary'],
 ['What sets him apart?','recruiter.fit'],
 ['Is he a senior engineer?','recruiter.roles'],
 ['How does he collaborate with clients?','recruiter.collaboration'],
 ['Give me a short introduction to Shivam','recruiter.summary'],
 ['Does he have backend experience?','recruiter.backend'],
 ['What has he done on the frontend?','recruiter.frontend'],
 ['How much AI experience does he have?','recruiter.ai'],
 ['Has he owned production features?','recruiter.ownership'],
 ['How does he approach testing?','recruiter.testing'],
 ['What should I ask him in an interview?','recruiter.interview'],
 ['What are the gaps in his portfolio?','recruiter.gaps'],
 ['What is his availability and notice period?','recruiter.availability'],
 ['also is he a good enginner if not tell him is negative things?','recruiter.assessment'],
 ['Is he a good engineer?','recruiter.assessment'],
 ['Is Shivam a bad developer?','recruiter.assessment'],
 ['Are you a competent engineer?','recruiter.assessment'],
 ['Is he any good?','recruiter.assessment'],
 ['Is he good?','recruiter.assessment'],
 ['Can he actually code?','recruiter.assessment'],
 ['What is your honest opinion of him?','recruiter.assessment'],
 ['Give me his pros and cons','recruiter.assessment'],
 ['What are his strengths and weaknesses?','recruiter.assessment'],
 ['How good is he at engineering?','recruiter.assessment'],
 ['Rate him as an engineer','recruiter.assessment'],
 ['What are his negative things?','recruiter.gaps'],
 ['What are the downsides of his work?','recruiter.gaps'],
 ['What could he improve?','recruiter.gaps'],
 ['Give constructive criticism of his portfolio','recruiter.gaps'],
 ['What are his red flags?','recruiter.gaps'],
 ['Tell me bad things about him','recruiter.gaps'],
];
test('common recruiter questions and the reported typo find an evidence-backed answer',()=>{
 for(const [question,id] of questions){
  const candidates=findProfileFacts(question);
  assert.ok(candidates.some(f=>f.id===id),`${question}: missing ${id}`);
  assert.equal(candidates[0].id,id);
  assert.ok(candidates.length<=8);
 }
});
test('recruiter summaries are canonical, sourced, and do not grant access to unrelated claims',()=>{
 for(const [question,id] of questions){
  const candidates=findProfileFacts(question);
  const original=approvedFacts.find(f=>f.id===id);
  assert.ok(original?.evidence.length);
  const result=resolveFactSelection(JSON.stringify({factIds:[id]}),candidates);
  assert.equal(result.answer,original.text);
  assert.ok(result.sources.length>0);
  assert.ok(result.answer.length<1000);
 }
 assert.equal(resolveFactSelection('{"factIds":["recruiter.fit"]}',findProfileFacts('Cutroom export MP4')),null);
 assert.equal(resolveFactSelection('{"factIds":["recruiter.fit"],"answer":"Best engineer in the world"}',findProfileFacts('Why hire him?')),null);
});
test('hiring and role answers identify a full-stack engineer with frontend, backend and database experience',()=>{
 for(const question of ['Why should we hire him?','What are his strengths?','What roles is he suited for?','Is he a full stack engineer?']){
  const candidates=findProfileFacts(question);
  const result=resolveFactSelection(JSON.stringify({factIds:[candidates[0].id]}),candidates);
  assert.match(result.answer,/^Shivam is a full-stack engineer\b/);
  assert.match(result.answer,/Angular/);
  assert.match(result.answer,/React frontend/);
  assert.match(result.answer,/FastAPI backend/);
  assert.match(result.answer,/MongoDB/);
  assert.ok(result.sources.length>0);
 }
});
test('hiring prompts allow evidence-based fit without requesting invented rankings or personality',()=>{
 const prompt=buildFactSelectionPrompt(findProfileFacts('Why should we hire him?'));
 assert.ok(prompt.includes('recruiter.fit'));
 assert.ok(prompt.includes('hiring'));
 assert.ok(prompt.includes('Do not write an answer'));
});
test('engineering assessments include positive evidence and concrete areas to improve',()=>{
 for(const question of ['Is he a good engineer?','Is he a good enginner? If not tell me his negative things.']){
  const candidates=findProfileFacts(question);
  const result=resolveFactSelection('{"factIds":["recruiter.assessment"]}',candidates);
  assert.match(result.answer,/full-stack engineer/);
  assert.match(result.answer,/positive signs/);
  assert.match(result.answer,/Cutroom is a prototype/);
  assert.match(result.answer,/three calibration calls/);
  assert.match(result.answer,/broader evaluations/);
  assert.match(result.answer,/supplied Eazytag résumé/);
  assert.ok(result.sources.some(s=>s.href.includes('/cutroom/blob/')));
  assert.ok(result.sources.some(s=>s.href.includes('/autoace-voice-tone-classifier/blob/')));
 }
 const criticism=resolveFactSelection('{"factIds":["recruiter.gaps"]}',findProfileFacts('What are his negative things?'));
 assert.match(criticism.answer,/Areas to improve/);
 assert.match(criticism.answer,/production-readiness evidence/);
 assert.match(criticism.answer,/broader test\/evaluation results/);
 assert.ok(buildFactSelectionPrompt(findProfileFacts('Is he a good engineer?')).includes('engineering assessments and constructive criticism'));
 assert.equal(resolveFactSelection('{"factIds":["recruiter.assessment"],"answer":"He is lazy and incompetent"}',findProfileFacts('Is he a good engineer?')),null);
 assert.ok(findProfileFacts('What are the negatives of Cutroom?').every(f=>f.topic==='cutroom'));
});
test('ordinary project questions retain their focused evidence and private claims remain unsupported',()=>{
 assert.ok(findProfileFacts('How does Open Agent isolate project documents?').every(f=>f.topic==='open-agent'));
 for(const q of ['What salary should we hire him at?','Why should we hire him based on his wife?','What is his favorite food?','Write Python code for an app'])
  assert.deepEqual(findProfileFacts(q),[],q);
});
test('the reported hiring question reaches strict Groq selection and produces the reviewed answer',async()=>{
 const candidates=findProfileFacts('Why shouwd we hire him?');let called=false;
 const result=await askGroq({question:'Why shouwd we hire him?',candidates,key:'mock-only',model:'openai/gpt-oss-20b',signal:new AbortController().signal,fetcher:async(_,init)=>{
  called=true;const body=JSON.parse(init.body);
  assert.ok(body.response_format.json_schema.schema.properties.factIds.items.enum.includes('recruiter.fit'));
  return Response.json({choices:[{finish_reason:'stop',message:{content:'{"factIds":["recruiter.fit"]}'}}]});
 }});
 assert.equal(called,true);
 assert.equal(result.ok,true);
 assert.equal(result.answer,approvedFacts.find(f=>f.id==='recruiter.fit').text);
});


test('all allowed recruiter selections fit the client response contract with their evidence',()=>{
 const {isAskResponse}=require('../lib/ask-shared.ts');
 for(const [question] of questions){
  const candidates=findProfileFacts(question);
  for(let i=0;i<candidates.length;i++)for(let j=i;j<candidates.length;j++)for(let k=j;k<candidates.length;k++){
   const ids=[...new Set([candidates[i].id,candidates[j].id,candidates[k].id])];
   const result=resolveFactSelection(JSON.stringify({factIds:ids}),candidates);
   assert.ok(isAskResponse({ok:true,...result}),`${question}: ${ids.join(',')}`);
  }
 }
});
