import {useEffect,useState} from 'react';
import {Download,Monitor,CheckCircle2,Info,ShieldCheck,ExternalLink} from 'lucide-react';
type InstallEvent=Event&{prompt:()=>Promise<void>;userChoice:Promise<{outcome:string}>};
const configured=(import.meta.env.VITE_WINDOWS_DOWNLOAD_URL||'').trim();
function safeUrl(value:string){try{const u=new URL(value,location.origin);return u.protocol==='https:'||u.origin===location.origin?u.href:null}catch{return null}}
export default function Downloads(){
 const [installEvent,setInstallEvent]=useState<InstallEvent|null>(null);
 const [available,setAvailable]=useState(false);const [installed,setInstalled]=useState(false);const [message,setMessage]=useState('');
 useEffect(()=>{let live=true;fetch('/downloads-status.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(data=>{if(live&&data)setAvailable(data.windows===true)}).catch(()=>{});
 const onPrompt=(e:Event)=>{e.preventDefault();setInstallEvent(e as InstallEvent)};
 const onInstalled=()=>{setInstalled(true);setInstallEvent(null)};
 setInstalled(window.matchMedia('(display-mode:standalone)').matches);
 window.addEventListener('beforeinstallprompt',onPrompt);window.addEventListener('appinstalled',onInstalled);
 return()=>{live=false;window.removeEventListener('beforeinstallprompt',onPrompt);window.removeEventListener('appinstalled',onInstalled)}},[]);
 async function install(){if(!installEvent){setMessage('Abra o menu do Edge ou Chrome e escolha Aplicativos → Instalar este site como aplicativo, se disponível.');return}await installEvent.prompt();const outcome=await installEvent.userChoice;if(outcome.outcome==='accepted')setMessage('Solicitação de instalação enviada.');setInstallEvent(null)}
 const url=available?'/downloads/windows/HypeSensi-Windows.exe':safeUrl(configured);
 return <div className="stack downloads-page"><header className="page-head"><span className="eyebrow">HYPE SENSI · WINDOWS</span><h1>Instalação para PC</h1><p>Uma plataforma só para Windows 10 e 11, acessível diretamente no navegador.</p></header>
 <div className="download-grid pc-download-grid"><article className="hype-card download-tile"><div className="download-symbol"><Monitor size={31}/></div><span className="download-platform">NAVEGADOR WINDOWS</span><h2>Instalar WebApp</h2><p>Instale a página como aplicativo pelo Microsoft Edge ou Google Chrome, sem baixar um instalador próprio.</p>{installed?<p className="notice"><CheckCircle2 size={16}/> WebApp já está aberto no modo instalado.</p>:<button className="primary-action download-full" onClick={install}><Download size={17}/> {installEvent?'Instalar WebApp':'Instruções de instalação'}</button>}</article>
 <article className="hype-card download-tile"><div className="download-symbol"><Download size={31}/></div><span className="download-platform">OPCIONAL · INSTALADOR</span><h2>Hype Sensi Windows</h2><p>Se você publicar um instalador Windows real e assinado, ele ficará disponível aqui.</p>{url?<a className="primary-action download-full" href={url} download><Download size={17}/> Baixar instalador <ExternalLink size={13}/></a>:<div className="download-unavailable"><Info size={17}/><span>Adicione o arquivo downloads/windows/HypeSensi-Windows.exe ao repositório ou configure VITE_WINDOWS_DOWNLOAD_URL.</span></div>}</article></div>
 <section className="hype-card stack"><h2><ShieldCheck size={21}/> Segurança e permissões</h2><p className="text-note">O WebApp não solicita administrador nem acessa arquivos pessoais, câmera ou microfone. O armazenamento persistente é opcional em Configurações. O navegador controla a instalação e cada permissão.</p>{message&&<p className="notice" role="status">{message}</p>}</section></div>;
}
