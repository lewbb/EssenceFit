/* Conteúdo padrão do site + fotos de teste. A lojista edita tudo na aba "Site" do painel. */
const SITE_PH=(a,b,t)=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/><circle cx='200' cy='190' r='62' fill='#fff' opacity='.45'/><path d='M80 500c0-120 50-190 120-190s120 70 120 190z' fill='#fff' opacity='.45'/><text x='200' y='470' font-family='sans-serif' font-size='17' fill='#123d5f' text-anchor='middle' opacity='.7'>${t}</text></svg>`);
const SITE_PHW=(a,b,t)=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 700'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='1600' height='700' fill='url(#g)'/><circle cx='1160' cy='250' r='110' fill='#fff' opacity='.45'/><path d='M930 700c0-190 100-300 230-300s230 110 230 300z' fill='#fff' opacity='.45'/><text x='1160' y='660' font-family='sans-serif' font-size='26' fill='#123d5f' text-anchor='middle' opacity='.7'>${t}</text></svg>`);
const SITE_COR=[["#a6d7ee","#e6f3fa"],["#e6def5","#f7e0e9"],["#ddefe5","#cfe6f5"],["#f7e0e9","#d6ecf8"]];
const sitePHW=(i,t)=>SITE_PHW(...SITE_COR[i%4],"foto de teste · "+t);
const sitePH=(i,t)=>SITE_PH(...SITE_COR[i%4],"foto de teste · "+t);
const ICO_P={
 Conjuntos:'<path d="M22 6l-8 5 3 7 5-2v11h14V16l5 2 3-7-8-5c-1 3-4 5-6 5s-5-2-6-5z"/><path d="M18 38h28l3 18H35l-3-9-3 9H15z"/>',
 Leggings:'<path d="M20 6h24l3 14-6 38h-7l-2-26-2 26h-7l-6-38z"/><path d="M20 12h24"/>',
 "Calções":'<path d="M16 12h32l5 34H36l-4-14-4 14H11z"/><path d="M16 19h32"/>',
 Jaquetas:'<path d="M24 8l-13 6-4 32 8 2 3-20v26h28V28l3 20 8-2-4-32-13-6c-1 4-4 6-8 6s-7-2-8-6z"/><path d="M32 14v44"/>',
 Camisetas:'<path d="M22 8L8 16l6 12 8-4v30h20V24l8 4 6-12-14-8c-1 4-5 6-10 6s-9-2-10-6z"/>',
 "Promoções":'<path d="M8 34L34 8h22v22L30 56 8 34z"/><circle cx="44" cy="20" r="3.5"/>',
 Novidades:'<path d="M32 6l6 17 17 6-17 6-6 17-6-17-17-6 17-6z"/>',
 Favoritos:'<path d="M32 54S8 40 8 24a12 12 0 0124-4 12 12 0 0124 4c0 16-24 30-24 30z"/>'};
const ICO=n=>ICO_P[n]?`<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO_P[n]}</svg>`:"";
const SITE_DEF={
 avisos:["Frete grátis acima de R$ 150","Até 2x sem juros","Entrega em Ponta Grossa, Carambeí e Castro"],
 slides:[
  {img:"",titulo:"Treine com *leveza*.\nVista com *essência*.",texto:"Moda de academia feminina com peças novas todo mês. Conjuntos, leggings e calções para você se sentir bem em cada treino.",botao:"Ver peças",link:"#loja"},
  {img:"",titulo:"Novidades da *semana*",texto:"Peças exclusivas, uma por tamanho e cor. Garanta a sua antes que acabe.",botao:"Ver lançamentos",link:"#novidades"},
  {img:"",titulo:"Aproveite as *promoções*",texto:"Preços especiais em peças selecionadas, por tempo limitado.",botao:"Ver promoções",link:"#promocoes"}],
 perks:[{t:"Frete grátis",s:"acima de R$ 150"},{t:"Até 2x sem juros",s:"Pix, débito e crédito"},{t:"Troca em 7 dias",s:"por tamanho ou cor"},{t:"Peças exclusivas",s:"uma por tamanho e cor"}],
 sobre:"A Essence Fit nasceu há poucos meses em Carambeí. Cada coleção é **pequena e exclusiva**. Gostou de algo de uma coleção anterior? **Dá para encomendar.**",
 tilesTitulo:"Compre por categoria",tiles:["","","","","",""],
 colecoes:[{img:"",etiqueta:"Nova coleção",titulo:"Jaquetas e camisetas",botao:"Ver agora",link:"Jaquetas"},{img:"",etiqueta:"Por tempo limitado",titulo:"Promoções da estação",botao:"Aproveitar",link:"Promoções"}],
 railNov:"Novidades",railPro:"Promoções",
 depoTitulo:"Quem usa",
 depo:[
  {img:"",nome:"Maria S.",nota:"5",variacao:"Conjunto | M | Bege",data:"18/10/2026",texto:"Caimento perfeito e o tecido não fica transparente. Já quero outra cor!"},
  {img:"",nome:"Ana P.",nota:"5",variacao:"Legging | P | Preto",data:"12/10/2026",texto:"Usei no treino e no dia a dia. Confortável demais."},
  {img:"",nome:"Julia R.",nota:"4",variacao:"Camiseta | M | Azul",data:"07/10/2026",texto:"Chegou rápido e é lindo pessoalmente. O tecido é bem fresquinho."},
  {img:"",nome:"Camila F.",nota:"5",variacao:"Macaquinho | G | Azul",data:"01/10/2026",texto:"Amei! Não marca e segura bem nos exercícios."}],
 vip:{titulo:"Novidades em primeira mão",texto:"Chame a gente no WhatsApp para saber das peças novas antes de todo mundo e encomendar as que você perdeu.",botao:"Quero receber novidades"},
 pol:[{t:"Trocas",x:"Até 7 dias após o recebimento, por tamanho ou cor, com a etiqueta na peça. Solicite pelo site ou pelo WhatsApp."},{t:"Entrega",x:"Entrega própria em Ponta Grossa, Carambeí e Castro. Frete grátis em compras acima de R$ 150. Retirada: combine antes pelo WhatsApp."},{t:"Pagamento",x:"Pix, débito e crédito. Até 2x sem juros. A partir de 3x, os juros da parcela ficam por conta da cliente."},{t:"Privacidade",x:"Usamos seu nome e telefone só para atender o pedido."}],
 rodape:"Moda fitness feminina, com peças novas todo mês em Ponta Grossa, Carambeí e Castro."
};
function siteMerge(d,o){if(Array.isArray(d))return d.map((x,i)=>siteMerge(x,o&&o[i]));if(d&&typeof d==="object"){const r={};for(const k in d)r[k]=siteMerge(d[k],o&&o[k]);return r}return o!=null&&o!==""?o:d}
const siteEsc=x=>String(x??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const siteFmt=x=>siteEsc(x).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<b>$1</b>").replace(/\n/g,"<br>");