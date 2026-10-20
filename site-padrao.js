/* Conteúdo padrão do site + fotos de teste. A lojista edita tudo na aba "Site" do painel. */
const SITE_PH=(a,b,t)=>"data:image/svg+xml,"+encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='400' height='500' fill='url(#g)'/><circle cx='200' cy='190' r='62' fill='#fff' opacity='.45'/><path d='M80 500c0-120 50-190 120-190s120 70 120 190z' fill='#fff' opacity='.45'/><text x='200' y='470' font-family='sans-serif' font-size='17' fill='#123d5f' text-anchor='middle' opacity='.7'>${t}</text></svg>`);
const SITE_COR=[["#a6d7ee","#e6f3fa"],["#e6def5","#f7e0e9"],["#ddefe5","#cfe6f5"],["#f7e0e9","#d6ecf8"]];
const sitePH=(i,t)=>SITE_PH(...SITE_COR[i%4],"foto de teste · "+t);
const SITE_DEF={
 avisos:["Frete grátis acima de R$ 150","Até 2x sem juros","Entrega em Ponta Grossa, Carambeí e Castro"],
 slides:[
  {img:"",titulo:"Treine com *leveza*.\nVista com *essência*.",texto:"Moda de academia feminina com peças novas todo mês. Conjuntos, leggings e calções para você se sentir bem em cada treino.",botao:"Ver peças",link:"#loja"},
  {img:"",titulo:"Novidades da *semana*",texto:"Peças exclusivas, uma por tamanho e cor. Garanta a sua antes que acabe.",botao:"Ver lançamentos",link:"#novidades"},
  {img:"",titulo:"Aproveite as *promoções*",texto:"Preços especiais em peças selecionadas, por tempo limitado.",botao:"Ver promoções",link:"#promocoes"}],
 perks:[{t:"Frete grátis",s:"acima de R$ 150"},{t:"Até 2x sem juros",s:"Pix, débito e crédito"},{t:"Troca em 7 dias",s:"por tamanho ou cor"},{t:"Peças exclusivas",s:"uma por tamanho e cor"}],
 sobre:"A Essence Fit nasceu há poucos meses em Carambeí. Cada coleção é **pequena e exclusiva**. Gostou de algo de uma coleção anterior? **Dá para encomendar.**",
 tilesTitulo:"Compre por categoria",tiles:["","","",""],
 railNov:"Novidades",railPro:"Promoções",
 depoTitulo:"Quem usa",
 depo:[{img:"",texto:"Caimento perfeito e o tecido não fica transparente. Já quero outra cor!",nome:"@cliente.um"},{img:"",texto:"Usei no treino e no dia a dia. Confortável demais.",nome:"@cliente.dois"},{img:"",texto:"Chegou rápido e o conjunto é lindo pessoalmente.",nome:"@cliente.tres"}],
 vip:{titulo:"Novidades em primeira mão",texto:"Chame a gente no WhatsApp para saber das peças novas antes de todo mundo e encomendar as que você perdeu.",botao:"Quero receber novidades"},
 pol:[{t:"Trocas",x:"Até 7 dias após o recebimento, por tamanho ou cor, com a etiqueta na peça. Solicite pelo site ou pelo WhatsApp."},{t:"Entrega",x:"Entrega própria em Ponta Grossa, Carambeí e Castro. Frete grátis em compras acima de R$ 150. Retirada: combine antes pelo WhatsApp."},{t:"Pagamento",x:"Pix, débito e crédito. Até 2x sem juros. A partir de 3x, os juros da parcela ficam por conta da cliente."},{t:"Privacidade",x:"Usamos seu nome e telefone só para atender o pedido."}],
 rodape:"Moda fitness feminina, com peças novas todo mês em Ponta Grossa, Carambeí e Castro."
};
function siteMerge(d,o){if(Array.isArray(d))return d.map((x,i)=>siteMerge(x,o&&o[i]));if(d&&typeof d==="object"){const r={};for(const k in d)r[k]=siteMerge(d[k],o&&o[k]);return r}return o!=null&&o!==""?o:d}
const siteEsc=x=>String(x??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const siteFmt=x=>siteEsc(x).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
