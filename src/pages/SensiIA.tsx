import {useMemo,useState} from 'react';
import allQuestions from '../data/quiz/questions.json';
import SensiQuiz from '../components/sensi/SensiQuiz';
import SensiResult from '../components/sensi/SensiResult';
import {calculateSensi} from '../lib/sensiCalculator';
import {getStored,store} from '../lib/storage';
import type {SensiValues,SensiProfile} from '../types/sensi';

type Question={id:string;title:string;options:string[];platforms?:string[]};
const questionBank=allQuestions as Question[];
export default function SensiIA(){
 const [step,setStep]=useState(0);
 const [answers,setAnswers]=useState<Record<string,string>>({});
 const [values,setValues]=useState<SensiValues|null>(null);
 const [message,setMessage]=useState('');
 const platform='PC / Emulador';
 const questions=useMemo(()=>questionBank.filter(q=>!q.platforms||q.platforms.includes('PC / Emulador')),[]);
 function answer(id:string,value:string){
  setAnswers(a=>({...a,[id]:value}));
 }
 function reset(){setValues(null);setAnswers({});setStep(0);setMessage('')}
 function save(){
  if(!values)return;
  const name=window.prompt('Nome do perfil:','Sensi Hype')?.trim();if(name===undefined)return;
  const profile:SensiProfile={id:crypto.randomUUID?.()||String(Date.now()),name:name||'Sensi Hype',platform:platform||'Não informado',values:{...values},answers:{...answers},created:new Date().toISOString()};
  const old=getStored<SensiProfile[]>('hype-react-sensis',[]);
  store('hype-react-sensis',[profile,...old]);setMessage('Sensibilidade salva em Meus Perfis.');
 }
 return <>
  <header className="page-head"><span className="eyebrow">CONFIGURAÇÃO INTELIGENTE</span><h1>Sensi IA</h1><p>Quiz exclusivo para Windows 10/11: emulador, mouse, DPI, memória, monitor e seu estilo de jogo. A sensibilidade é uma sugestão inicial de 0 a 200.</p></header>
  {values?<SensiResult platform={platform} values={values} onChange={setValues} onSave={save} onReset={reset}/>:
   <SensiQuiz step={step} questions={questions} answers={answers} onAnswer={answer} onPrevious={()=>setStep(Math.max(0,step-1))} onNext={()=>{if(step===questions.length-1){setValues(calculateSensi(answers));setMessage('')}else setStep(step+1)}}/>}
  {message&&<p className="notice" role="status">{message}</p>}
 </>;
}
