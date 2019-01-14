const poems = [
  {
    title: 'Sonetic-tac',
    poem:
      'Dezembro não é mais alvo nem mais cinza\nque qualquer outro mês. Vê se sai dessa.\nPor que ser mais herói ou mais ranzinza\nse aqui nada termina ou recomeça?\n\nQuando muito, espelhando os outros onze,\nbrinca de vida e morte com a ampulheta\nergue uma estátua ao tempo em falso bronze\nrecicla o mesmo comercial careta.\n\nPara com isso. Janeiro não salva\nnem traz com ele alguma boa nova.\nNenhuma época é mais cinza ou alva\n\nque qualquer outra, salvo se estás morta.\nO ano não termina, só desova,\ne o lar de Cronos nunca teve porta.\n',
    author: 'Laís Chaffe',
    state: 'Rio Grande do Sul.',
  },
  {
    title: 'Eu não sou máquina',
    poem:
      'Não sou engrenagem da máquina, que faz manutenção da máquina,\nQue faz manutenção do sistema,\nQue faz manutenção de uma produção,\nQue faz manutenção de quem explora a mão de obra de um povo\nQue faz manutenção de uma classe privilegiada e têm máquinas\nMáquinas que votam, e são engrenagens da máquina, que faz manutenção da\nmáquina...',
    author: 'José Caetano dos Santos Júnior, Filosofino',
    state: 'Paraíba',
  },
  {
    title: '',
    poem:
      'Abandonada\nminha anatomia se encurta\nDeixei-a aos pedaços por toda cidade\nEnquanto crianças-copo tilintam fomes\ntão antigas como suas etnias\nPara vidros aborrecidos de fumê\nMas olhos-semáforos disfarçam: - Abriu! Desvia!\nHomens-papelão, classificados de rua,\nanunciam desempregos mas bocas-gramática\napontam: - Olha o erro! Tá escrito em outra língua!\nMulheres-número, mais corpos e mais culpa,\nse empurram desiludidas para carros, camas e rua\nMas cabeça-sentença grita: - Deve se vender por gosto! Desde lá, deve ser puta.\nÍndias-descalçadas ardidas e desbotadas de meios-dias\n\nvendem enfeites de palha mas bolsos-tempo\nmarcam: - Agora não! Que coisa cara!\n\nAbandonada,\nminha anatomia se encurta.\nDeixei-a aos pedaços por toda cidade.\nFujo de Nações inventadas e pergunto:\nEm que parte de mim se localiza a fronteira?\nQue cores tem a bandeira de minha face?\n\nEstrangeira de mim\npeço hospedagem.\n\n\n*Aos hermanos venezuelanos.',
    author: 'Sony Ferseck',
    state: 'Pará',
  },
  {
    title: 'POEMA DA LIBERTAÇÃO DO RIO',
    poem:
      'não tenho medo da palavra que corta o rio\nque divide o rio em dois hemisférios\nduelo de águas nas costas da maré\nquantas vezes deixei de naufragar?\nquantas vezes não vi o rio sobre o rio\ne pensei ser um rio só?\nisso é a porrada do mundo\nda força do mundo sobre a miudeza\nnos olhos que só procuram pelo pouco\n\na gente nunca sabe como funciona\no olho da esperança\na gente nunca conserta\num dente de leão\neu tenho medo é de velhas dores\nou de não entender que a poesia vai além da rima\neu tenho medo é de achar\nque o rio não é libertação\nque só pode lavar banhar molhar navegar\ne outros verbos que só servem para a linguagem\nrepartir o rio vai além de passar a faca ao meio\nrepartir o rio com o sol\nrepartir o rio com a chuva\nrepartir o rio com a canoa\nquer dizer sinônimo de poesia\nvocê tem histórias com o rio?\nimagine uma boiada indo em disparada no banzeiro\nimagine que do rio o barro é uma jura de amor eterno\nse o mururé disser que um dia foi uma estrela\nacredite!\nessa é uma história nascida do possível que a vida gera\no que você levaria do rio?\numa corrente de água\nfenômeno raro das marés?\num Deus que fosse sujeito ao toque\na forma física do rio que nunca dorme?\neu vou repartir é a minha sede com o rio\neu vou repartir o meu tambor\nem dia de santíssima trindade\ndo rio eu levo a fúria a alquimia o deserto e o universo\nos seus pontos cardeais quero no poema\n\no seu santo remédio a sua visagem o seu nascedouro\no rio é poesia\nacredite no que lhe falo\nquem chorou o rio e o fez assim não foi Deus\nquem chorou o maior rio do mundo foi um poeta',
    author: 'Pedro Stkls',
    state: 'Amapá',
  },
  {
    title: 'NESTA CASA QUE HABITO',
    poem:
      'Habito esta casa que me diz.\nSeu chão, suas muralhas de singeleza,\nseu teto, sua arquitetura de afetos:\nem todas estas coisas de uso\nhabita meu guardar.\n\nHabito esta casa que me guarda.\nE dela guardo o riso comum dos meus –\nesta gente e seu diuturno cultivo\n                           dos gestos que me dizem\n                       no olhar comovido que sou.\n\nÉ meu aprendizado e meu querer\ndizer isto que a escrita\n                que me ergue\nnão pode habitar em mim.',
    author: 'Dércio Braúna',
    state: 'Ceará',
  },
  {
    title: 'PASSAS',
    poem:
      'Não pergunte por quê,\nquando o sol chegar, respondo.\nJamais nunca jamais,\nprazer, tanto prazer\nmudanças, mil mudanças.\n\nQuando criança, não gostava de\nameixas,\nnão gostava de passas também,\njá que me lembravam ameixas.\n\nHoje entendo,\npassas são diferentes de ameixas,\ndescobri adorar passas,\nque nada têm a ver com ameixas.',
    author: 'Solange Casotti',
    state: 'Espírito Santo',
  },
  {
    title: 'Clarão',
    poem:
      'a fome - ave de rapina -\nfita o que nos desalimenta,\ncada farelo que nos consome:\n\nos ásperos grãos\nde pão,\nde guerras,\nde prêmios,\nde dinheiro,\nde poder...\n\ncaberia tudo\nnum só clarão de espanto ou\nnum bater de asas sovinas?\n\na fome, de modo inclemente,\nmata com pílulas de culpa,\nde exílios e silêncios cortantes!\n\num sonho de capa de jornal:\nem fase de inapetência e autoflagelo,\n\na fome suicida-se,\ncom uma garfada,\nno fundo da vasilha\nem que jantava vazios.',
    author: 'Carvalho Junior',
    state: 'Maranhão',
  },
  {
    title: 'chuva negra',
    poem:
      'cartas\npara a criança órfã\ncruzam o oceano\nsangue de mulheres\nescorre chuva ácida\nna fumaça de cigarro\n\ntigelinhas de arroz\nnão apagam incensos\ndiante de túmulos',
    author: 'Marilia Kubota',
    state: 'Paraná',
  },
  {
    title: 'Macapá não tem mapa',
    poem:
      'encontrei a palavra saudade hoje\nem um caderno de cartografia\nela se estende inteira\npor essa cidade\ndesde o seu ponto mais seco\nas margens do rio\n\nparece mesmo que estamos\nmorando na saudade\n\nno mapa\nesta é\numa cidade inteira\nfeita de pontes\nligando as faltas\nque as pessoas fazem\n\nimagino que quando anoitece\ndo alto podemos\nver as luzes\nque cada saudade\nfaz brilhar.',
    author: 'Thiago Soeiro',
    state: 'Pará',
  },
]

export default poems
