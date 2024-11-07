import "mocha"
import { expect } from "chai"
import JSONCrush from "jsoncrush"

const jestConsole = console

beforeEach(() => {
  global.console = require("console")
})

afterEach(() => {
  global.console = jestConsole
})

describe("jsonCrush", () => {
  const jsonstring = `{"init":[0.012036538172433933,0.33515935284544385,-0.8647,-0.2402,-0.8642,0.2399,-0.8644,0.0003,-0.0002,0,0.5091682967509515,0.002340117390845597,1.204217044875723,0.054814969344486715,0.7560122401274153,-0.07057980214846309,0.842956044128091,0.03368814504550459,0.8466587903395358,-0.03406437653267602,0.9019711833609422,0.001522602982229516,0.9079061608180677,-0.07458275710783385,0.5032380851806842,0.6500959509066422,-0.2519582779129382,-0.669219410172663,1.0726320062467571,0.6356832499974137,0.96088048371321,-0.03395033336547472,1.0661711927020487,-0.2769575084675987,-1.3249585021233543,-0.49128784704166323,1.3891415858689493,-0.1598179370999615,1.0250741417899258,0.12195201059909293,1.3878089165732264,0.2816216899451193,1.2225914314605695,0.47491405615226157],"shots":[{"type":"AIM","offset":{"x":0.0945945945945946,"y":-0.28378378378378377,"z":0},"angle":0.2861325326537706,"power":2.6527500000000006,"pos":{"x":0.012036538172433933,"y":0.33515935284544385,"z":0},"i":0},{"type":"AIM","offset":{"x":-0.19416924658078394,"y":0.22868822375070108,"z":0},"angle":-0.5479710322722136,"power":2.6527500000000006,"pos":{"x":0.6489260353080882,"y":0.4459939877797891,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":1.179,"y":0,"z":0},"id":6}]}},{"type":"AIM","offset":{"x":0.1671966562550577,"y":0.24908889605345333,"z":0},"angle":0.09942916699690399,"power":1.4737500000000001,"pos":{"x":0.5517325040886984,"y":-0.2756910138188343,"z":0},"i":0},{"type":"AIM","offset":{"x":-0.06756756756756757,"y":-0.08558558558558559,"z":0},"angle":0.9313012732593017,"power":2.4562500000000003,"pos":{"x":-0.9957897817629141,"y":-0.4078939441177586,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":-0.8646,"y":-0.24016666666666672,"z":0},"id":1}]}},{"type":"AIM","offset":{"x":0.26105161291056883,"y":0.14782440731080404,"z":0},"angle":-2.4304044227833406,"power":2.4562500000000003,"pos":{"x":-1.084788701166196,"y":-0.2521772252352722,"z":0},"i":0},{"type":"AIM","offset":{"x":0.17040114235151227,"y":-0.24690777769300754,"z":0},"angle":2.8503146757042273,"power":3.43875,"pos":{"x":0.26257470993918025,"y":-0.09226044657977024,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":0,"y":0,"z":0},"id":4}]}},{"type":"AIM","offset":{"x":0.17040114235151227,"y":-0.046907777693007524,"z":0},"angle":-0.9485057818699036,"power":1.2772500000000002,"pos":{"x":0.929399142038721,"y":0.5400176992463128,"z":0},"i":0},{"type":"AIM","offset":{"x":0.25675675675675674,"y":0.14864864864864866,"z":0},"angle":0.36219665509477494,"power":1.2772500000000002,"pos":{"x":0.8633734756813644,"y":-0.17580192863297145,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":1.179,"y":0,"z":0},"id":6}]}},{"type":"AIM","offset":{"x":-0.013513513513513514,"y":0.14864864864864866,"z":0},"angle":-3.2117630457202053,"power":4.716,"pos":{"x":0.4613200930713131,"y":0.567484548361091,"z":0},"i":0},{"type":"AIM","offset":{"x":-0.013513513513513514,"y":0.14864864864864866,"z":0},"angle":-1.1776425236097912,"power":4.716,"pos":{"x":-0.10130915608117995,"y":0.3128675516011025,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":0,"y":0,"z":0},"id":4}]}},{"type":"AIM","offset":{"x":-0.013513513513513514,"y":0.14864864864864866,"z":0},"angle":1.4404811140232954,"power":4.716,"pos":{"x":1.2801215735334959,"y":-0.6187661869804036,"z":0},"i":0},{"type":"AIM","offset":{"x":0.0045045045045045045,"y":0.06756756756756757,"z":0},"angle":-2.67560055976356,"power":4.716,"pos":{"x":0.5791958013523846,"y":0.2901110188756174,"z":0},"i":0},{"type":"RERACK","ballinfo":{"balls":[{"pos":{"x":0,"y":0,"z":0},"id":4}]}},{"type":"AIM","offset":{"x":-0.08558558558558559,"y":-0.06756756756756757,"z":0},"angle":-0.35042680406790483,"power":4.716,"pos":{"x":-0.7076748028830616,"y":-0.5270370963107135,"z":0},"i":0}],"start":1718613841142,"now":1718614055728,"score":39,"wholeGame":false}`
  const crushed = JSONCrush.crush(jsonstring)
  const encoded = encodeURIComponent(crushed)
  const decoded = decodeURIComponent(encoded)
  const uncrushed = JSONCrush.uncrush(crushed)
  const str = `('init!["O#P8646P2k5P8642O2k3P8649,0,-q147178X95878387P146988956X633uO7W9926X808k99PW056229580X7W623,q395893906X18687O0309834W456146122O7850v1321444826OW7943457746683393O8454_2104309055O03341822824u8297O8441550856490995P032X236957_79XO90u931V9k5247PW0X95v076Y56k3O8k8_10_246741P13V348623230549O0147452_1033V707P1443874k66455214O829968k8__169O1588_63v3212903O96158_Y6748612O054926Y98Wu618O9624122853032372P032284760V8649X5O9379_6790117894P09999597X507342,q107645661715287P44620987176293686,q03092u130422934P081Y68504579432,q39176k783899214O4556_91087890X,q1376920363088v4O5V9_88u113683,q1546284949v7069O6839774698702815]~shots![Z0N0Dj4396696969_9086$"NH#J!0*0N0D3.W415716V74614$H6321V2660731099Njk1k791214Y5VBS*0N0D3.167138993774994$H7723930460142693Nj1814736084u1383J!0*0N0D-2.688443315529157L4.91uWWWWW05FH179Y57774786289NH28432388628761u7BS* j299982Y845832245DH173603957109Y912L2.3088VFj3149266811670549NH315X10844_9W5J!0* H1W01734154167V7D-q13Yu687378848L4._38VFqX74810X7v8907NH5160592268528739BQ*UDH4171X21572609Y6TH7V95473V12_vNH118u0910501101J!0*UDj8218k8959429391T-q3338173Y5Y9613NH141042v566846626B%0N0Jd!4)])*H283974710158v5Nj09673863V264726D-q031V310v0Y803TH8020231743347841NH4430928130920293J!0*HW45045045045045045NH0k5k5k5k5k54Dq47611887Y484743Lq179Fq1_v960328XVNj3869310611859547BQ*j07471231X4318555Nj2905478797790549D-5.3W382623_4579Lq179Fq04X902vW64376NH1787851608026901J!0*j06V6V6V6V6V7Nju6V6V6V6V674D-q693163637X53331L2.1615FqX76_0921v9uNHk14410388Y1246BQ*j01v1v1v1v1v14Nj2Y7Y7Y7Y7Y77Dj71Y0924uu4_6Lq3V5WWWWW04FH660441524886108NH170720592u630506J!0)]~start!1718606k61k~now!171860Y8X93~score!37~wholeGame!false)*),ZBJ!0),('type!'RERACK'~ballinfo!('balls![('poD~z!0)~angle!F~po%H0.J~z!0)~iL~power!N~y!O,HP,jQ%q179N0Jd!6)])S%j8646Nj2k16666666666672Jd!1)])TLq6211uWWWW01FUH1636367Y88848386NHu14418597798Y44V75W00X19Y65Z('type!'AIM'~offset!('x!_27j-Hk40q1.u25v35 jW32u6X98342282_N"j245482363X30444#208704710v58783$L3.438VF%s!('x!␁%$#" vuqkj_ZYXWVUTSQPONLJHFDB*_`

  const data = JSONCrush.uncrush(str)

  const urlWith01 =`https://tailuge.github.io/billiards/dist/?ruletype=snooker&state=(%27init!%5B%24S%25%2C-1.3k3116176132592S392896X420725955S8647P2399S8648P0003S28271qk5472k1P0qj74X66530_44P10113773477X8915P013226625179665162%2C1.342441621430767S108Z5u9855X333P70k0j946315961S22121013266608228S01398298098_23342P08_5887062886981P859394893u04122S0Zj716879795267Pjq6428k0u318P1568194163q99122P8279k42308_Z9S26594240995292806Pk6468173739k2608S677121u5X03j1PZ485207830185q7P41196295062043886P93q076140686j3P62j1463_863103%2C1.09264_70930971S03225612439160074S94422995_659738S0979k77046144u6P930Z03740437u7S4_5661j69040X7P6965824706744314Sk9772348q0321838%2C1.u8073830073955P3j4708855488Z46%2C1.Z20323952697277P4701230941888316P506334289u1394P4225u80q879383%5D~shots!%5B%200LH1FH099255099Z_8004%23%24LY%25%2BH076WLH060Z0Z0Z0Z038FY8862X791716634%23H803u62391224862LH611j04k2686204BV*Y06263u8098718637LY293388879Z10309F3.957737u7034906U2.1123_vH606461X8k1521LYq2_8809u4433826%2BH1j6j6j6j6j69LH%261.39073810k3203XU1.277TkvH010X557221Z47u1LY5865438528159082BN0%22QHk252252252252252F2.9858X1041547673DH5j6477606479X9LH377X08k22597k7%2BY03153153153153153LY19Z9Z9Z9Z9Z9F-2.5774k995_u483DHZ1494870k150404LH4124900968733jjBNY8646LY24016666666666672Jd!4)%5D)*Y012318Z94u62911LY09974698960030837FY88u71590q309XDHuj10X569747243LH5692209391721716%2BQH076WF-2.j24783232q343DH5171X54Z2X2qLH170868383_6j943BNH72q%22H1615850q25792993LH2527652786198981FHZ_686663094727UH8jT01vY739Z8524040k93LH01700080jk8_11%2BYku2286q537_58LH00092Z301019961701F-1.3u03166k658043D1.0406699127153762LH560976879q46656BV*Y141ZX698392614LH2646q47687861_FH74914u52896k31UH8jT01v1.0483Z95763X587LHk476892147u5642%2BH04q4q4q4q4q4LH032432432432432434FY9934991630416_2DH2985718785007952LH6283966624289706BNH72q%22QY%263.141474301700196U4.0773_vHX5563424q212785LY6441244338088321%2BOF2.1Z216639492104DY50327X25X51644LY5592382588573288BNY8646L0Jd!3)%5D)*OFH14951238Z465061DY2590149598j447XLY6704_1474989654%2BOF-1.4931155333046244D1.1650494256220822LH074k585213326ZBV*QH042342342342342u4FH5q2110X7395317DY765506714315u67LY664q21811469X9%2BH26W7LYq855855855855856FH415X08jj776216%231.0j948716108826LY09596149376420338BV)%5D~start!1718616519706~now!1718616821878~score!64~wholeGame!false)*)%2C%20BJ!0)%2C(%27type!%27RERACK%27~ballinfo!(%27balls!%5B(%27poDU4.91T0qvF~z!0)~angle!H0.J~z!0)~iL~y!Ns!(%27x!OY11261261261261261LH1W66P%2CHQY00X0X0X0X0X0XLS%2CYT25000000000U~power!VN1.179L0Jd!6)%5D)W57657657657657X45Y-HZ36_75j84k02q05u35v~poN%20(%27type!%27AIM%27~offset!(%27x!%22L0Jd!5)%5D)*%23U1.6211T1v%24Y9851416771k5912%25638Xu492834318%2606_6_6_6_6_7F%2BJ!0*%01%2B%26%25%24%23%22%20vuqkj_ZYXWVUTSQPONLJHFDB*_`

  it("decodeURI", (done) => {
    console.log(urlWith01)
    console.log(urlWith01.replace("%01",'\x01'))
    console.log(decodeURI(urlWith01.replace("%01",'\x01')))
//    console.log(decodeURI(urlWith01))
  //  console.log(decodeURI(decodeURI(urlWith01)))
    expect(str).to.be.length(1973)
    done()
  })

  it("jsonCrush", (done) => {
//    console.log(crushed)
//    console.log(uncrushed)
    expect(str).to.be.length(1973)
    expect(uncrushed).to.be.eq(jsonstring)
    expect(decoded).to.be.eq(crushed)
    done()
  })

  const bad = `https://tailuge.github.io/billiards/dist/?ruletype=snooker&state=%28%27init%21%5B%24Q%2BT8645T24U%2C-j084380814484855Q21937523769470274T8642%2C0Tk01%2C0Q7208%2C0%2Cj23986553562S715Q144446Z80v39k7Q7879QkUQ8457QU38Q846TU37Q9U3Tk02Q9U9T0668Q9U6Q0671TW8881407667921T5315991337382775Q96u9u91388U81QU3721U5220v6186Q9621970994338601TU35k0Z87930511Q87923Z92584601T2S3344811829063%2Cj3935838802U887T36242749Z0S3755%2Cj09499Z92336568T25596k5281194045%2Cj0187062806539k7Qk09672810906v244%2Cj0206846147370106Q474277737u31935%2Cj15318W68939533Q491u632645063407%5D~shots%21%5B%22XU153153153153153OJ05V6DX8577u7710S3594L3.43875F%24OJ%2B_J0111U49815296408OX299794450130U014D2.84u153657914833L4.9ZNk5Fj07S856047456245OX3432242831158396BY%2AX2991537846886426OX0225u951535704283DXSU339979956484Lj32637N3Fj195955385S56528OX18Zv19336571Z4_X%2FJu666666666666666DJ9297272184550487%25X197335v229013978OX3284082021983u9BY%2AX058834840S145521OJ294v420270727607DX813746341U0Z87%25J9778284764097188OJ26295u2913011u_Xk45045045045045045O%3ADj4067672859559628%25j2890738976838352OJuu27205082U496BP%2AJqX0V59D4.86399653U22461L3.193ZN7Fj3113827327S8073OJ29641064449574744_%20D-2.23384757088ZS%23j245136u85652333OJv5147Z31370v3BP%2A%20D-3.614Z0883627753%23J8669924959388464OJU04646515058k14_%3BOJ21v1v1v1v1v1D-j744S395378U475%23J59157k637636978OJ4928572484523u1B%26J9743Z5kkkk5O0Hd%215%29%5D%29%2A3.1026943625995973e-14OJ3D7.830877308756267L3.684375Fj08245765724S865OJ4S3504218395997_J%2FX05V6Dj3044710484236743L4.666875Fj02248746991187uOX389378615114185UBP%2AXqJ2747747747747748DJ759228Z44662196LJ786kkkkkk1FJ5v6809256108742OX21827769k9923584_X21552S8659v5133OJ20868340765233068DX93143181402U374Lj2772N02FjU2062280u96528OJ2364520805702285BP%2AX13338975553749208OJ2687139243091956D-4.027296110856934%3C8294056426943863OX53Uu4059027643_J09486832980505136OJ2846049894151S1DX9Z110Z15314409Lj52287N2FX18489492220983275OJ3U8261502869WBY%2AJqX0V59DX092509S5147v948%3CZ3S910110618822OX48328893258Wv5_J%2FJZu2u2u2u2u3DJ9676914322439181L2.898375FJ8502325297808555OX510u99880596818BP%2AJ0137470Z2588150SOX099684867242u813D-j59U8108762790ULj91587N2FXv3428431986u51OJ5014595268966328_JW7Z84Z3340419OJ267S8v27v282SD2.706836627322867L2.407Z5FX64329S736669448OX024119869Z309053B%26J7205O0Hd%212%29%5D%29%2AXv849336774U853OJ241Z26195791v01D3.3513931559v8824L2.407Z5Fj2606633514298724OX21577S2074318Z3H%210%29%5D~start%21v187257205S~now%21v18726079Z1~score%2170~wholeGame%21false%29%2A%29%2C%22BH%210%29%2C%28%27type%21%27RERACK%27~ballinfo%21%28%27balls%21%5B%28%27poD~z%210%29~angle%21F~po%26H~z%210%29~iJ0.L~power%21N5kkkk0O~y%21P%26jv9O0Hd%216%29%5D%29Q%2CJS54T%2CXU03V85585585585585W135X-JY%260O0Hd%214%29%5D%29Z12_H%210%2Aj1.k00q049S9S9S9S955Ou16v17%20%3AO%3B%22%28%27type%21%27AIM%27~offset%21%28%27x%21%23L2.21062N3F%24-j0649043227374102%25LJ73687N1F%26s%21%28%27x%21%2BS90706793083953%2F0WWWWW14O%3AJ040S0S0S0S0S%3BJ1U6U6U6U6U6%3CLJ93337N1FJ%01%3C%3B%3A%2F%2B%26%25%24%23%22%20vuqkj_ZYXWVUTSQPONLJHFDB%2A_`

  it("decode", (done) => {
    const d = decodeURIComponent(bad)
    expect(d).to.be.length(2673)
    console.log(d)
    done()
  })
    
})