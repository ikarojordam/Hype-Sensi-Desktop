/* Preferência inicial de tema, carregada antes do React para evitar flashes. */
(()=>{try{const k=localStorage.getItem('hype-theme'); if(k)document.documentElement.dataset.hypeTheme=JSON.parse(k)}catch{}})();
