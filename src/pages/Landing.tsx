import {useState} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight,CheckCircle2,ChevronDown,Crosshair,Grid2X2,Menu,Monitor,Save,SlidersHorizontal,Star,X,ShieldCheck} from 'lucide-react';
import {useTheme} from '../hooks/useTheme';
import Downloads from './Downloads';
const how=[
 {num:'01',title:'Começar Jornada',text:'Entre no Dashboard Windows e confira o tutorial interativo na primeira visita.'},
 {num:'02',title:'Configure seu PC',text:'Informe emulador, Windows 10/11, DPI do mouse, monitor e memória RAM.'},
 {num:'03',title:'Gere sua sensi',text:'Receba um ponto de partida de 0 a 200, copie os valores e ajuste no Free Fire.'},
 {num:'04',title:'Salve e personalize',text:'Monte HUDs, faça ajustes no Hype Adapt e exporte seu backup.'}
];
const highlights=[
 {icon:Crosshair,title:'Sensi IA para PC',detail:'Quiz exclusivo para Windows e emuladores.'},
 {icon:Grid2X2,title:'HUD Studio',detail:'Editor visual para planejar o HUD do emulador.'},
 {icon:SlidersHorizontal,title:'Hype Adapt',detail:'Refine suas configurações depois dos testes.'},
 {icon:Star,title:'Jogadores famosos',detail:'Biblioteca de perfis com dados e fontes cadastrados.'},
 {icon:Save,title:'Perfis e backups',detail:'Armazenamento local e exportação JSON.'},
 {icon:ShieldCheck,title:'Privacidade e permissões',detail:'Controle dos recursos do navegador, sem permissões invasivas.'}
];
const faqs=[
 ['Esta versão é só para Windows?','Sim. Este site é a edição PC, com interface e quiz voltados a Windows 10/11 e emuladores.'],
 ['Preciso instalar alguma coisa?','Não para usar o site. Você pode instalar a PWA pelo navegador compatível ou baixar um instalador Windows quando publicado.'],
 ['O site pede acesso de administrador?','Não. O navegador não precisa de acesso de administrador. Permissões opcionais são solicitadas somente ao usar os recursos correspondentes.'],
 ['O diagnóstico mostra temperatura ou FPS do jogo?','Não. Um site não consegue ler com segurança esses dados nativos. Para isso seria necessário um programa auxiliar Windows.'],
 ['As configurações são aplicadas no Free Fire automaticamente?','Não. A Hype Sensi sugere ajustes, e você aplica manualmente.'],
 ['Quando aparece o tutorial?','Na primeira entrada do Dashboard. Fechar ou concluir evita a abertura automática nas visitas seguintes.'],
 ['Como repetir o tutorial?','Acesse Configurações → Repetir tutorial.'],
 ['Onde ficam os perfis?','No armazenamento do navegador. Exporte backups e não dependa apenas do cache local.']
];
export default function Landing(){
 const {theme}=useTheme();const [mobileMenu,setMobileMenu]=useState(false);
 return <div className="public-site pc-landing">
 <header className="public-nav"><Link to="/" className="public-brand"><img src={'/assets/imagens/logos/logo-'+theme+'.png'} alt=""/><span>HYPE <strong>SENSI</strong><small> WINDOWS EDITION</small></span></Link><button className="public-menu-trigger" aria-label="Abrir menu" onClick={()=>setMobileMenu(v=>!v)}>{mobileMenu?<X size={23}/>:<Menu size={23}/>}</button><nav className={'public-nav-links '+(mobileMenu?'show':'')} aria-label="Navegação"><a href="#como-funciona" onClick={()=>setMobileMenu(false)}>Como funciona</a><a href="#ferramentas" onClick={()=>setMobileMenu(false)}>Ferramentas</a><a href="#faq" onClick={()=>setMobileMenu(false)}>FAQ</a><a href="#downloads" onClick={()=>setMobileMenu(false)}>Downloads</a><Link to="/dashboard" className="public-nav-start">Abrir Dashboard <ArrowRight size={16}/></Link></nav></header>
 <main><section className="public-hero"><div className="public-aura public-aura-a"/><div className="public-aura public-aura-b"/><div className="public-hero-content"><span className="public-chip"><Monitor size={15}/> HYPE SENSI · WINDOWS 10 / 11</span><img className="public-hero-logo" src={'/assets/imagens/logos/logo-'+theme+'.png'} alt="Hype Sensi"/><h1>A configuração ideal começa no <span>seu PC.</span></h1><p>A edição Windows da Hype Sensi reúne quiz para emuladores, ajustes de sensibilidade, HUD Studio, perfis e backup — tudo em um painel elegante e independente.</p><Link className="public-journey" to="/dashboard">Começar Jornada <ArrowRight size={21}/></Link><span className="public-journey-sub"><CheckCircle2 size={15}/> Tutorial interativo ao entrar no painel pela primeira vez</span><a className="public-scroll-cue" href="#como-funciona">Saiba como funciona <ChevronDown size={17}/></a></div></section>
 <section className="public-section" id="como-funciona"><div className="public-heading"><span className="eyebrow">DO INÍCIO À CONFIGURAÇÃO</span><h2>Como funciona no Windows?</h2><p>Uma experiência focada em quem joga Free Fire em emuladores no computador.</p></div><div className="public-steps">{how.map(x=><article className="public-tile public-step" key={x.num}><span className="public-step-number">{x.num}</span><h3>{x.title}</h3><p>{x.text}</p></article>)}</div></section>
 <section className="public-section" id="ferramentas"><div className="public-heading"><span className="eyebrow">CENTRAL HYPE</span><h2>Um só lugar para configurar</h2><p>Ferramentas selecionadas para a versão PC.</p></div><div className="public-features">{highlights.map(({icon:Icon,title,detail})=><article className="public-tile public-feature" key={title}><span className="public-feature-symbol"><Icon size={24}/></span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
 <section className="public-platform public-section"><div className="public-platform-icon"><Monitor size={44}/></div><div><span className="eyebrow">WINDOWS 10 E WINDOWS 11</span><h2>Foco total em PC</h2><p>Experiência de navegador desktop com opção de instalação como WebApp. Nenhuma modificação automática no jogo, sem exigir privilégios de administrador.</p></div><Link to="/dashboard" className="public-nav-start">Abrir painel <ArrowRight size={16}/></Link></section>
 <section className="public-section" id="faq"><div className="public-heading"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Antes de começar</h2></div><div className="public-faq">{faqs.map(([q,a])=><details className="public-faq-item" key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></section>
 <section className="public-section public-downloads" id="downloads"><div className="public-heading"><span className="eyebrow">INSTALAÇÃO</span><h2>Hype Sensi para Windows</h2><p>Instale pelo navegador ou obtenha o arquivo de instalação quando ele estiver publicado.</p></div><Downloads/></section>
 <section className="public-outro"><span className="eyebrow">PRONTO?</span><h2>Sua jornada no PC começa aqui.</h2><Link to="/dashboard" className="public-journey">Começar Jornada <ArrowRight size={20}/></Link></section></main>
 <footer className="public-footer"><span>HYPE SENSI · WINDOWS EDITION</span><span>Frio Mortal Developer · FrioStore</span></footer></div>
}
