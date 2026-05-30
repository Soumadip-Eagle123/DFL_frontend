const extractId = (url) => {
  const match = url.match(/v=([^&]+)/);
  return match ? match[1] : url.split("/").pop();
};

const courses = [
  {
    name: "Python Basics",
    videos: [
      "https://www.youtube.com/watch?v=_aWbUudZ5Yo&list=PLaldQ9PzZd9qPYGj4aWUXitBlfWz72e9m&index=2"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Python Intermediate",
    videos: [
      "https://www.youtube.com/watch?v=VXU4LSAQDSc",
      "https://www.youtube.com/watch?v=VXtjG_GzO7Q",
      "https://www.youtube.com/watch?v=c9vhHUGdav0"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Generative AI",
    videos: [
      "https://www.youtube.com/watch?v=vwncYfhxbR0",
      "https://www.youtube.com/watch?v=yodh-oEFnb4",
      "https://www.youtube.com/watch?v=CUDT5E6jz84",
      "https://www.youtube.com/watch?v=P22qI2RnNjA",
      "https://www.youtube.com/watch?v=xlYJhtL0qbQ"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Machine Learning",
    videos: [
      "https://www.youtube.com/watch?v=1L420xXpDTg",
      "https://www.youtube.com/watch?v=Lb0JzFtTmBs",
      "https://www.youtube.com/watch?v=omGvjpmPDoY",
      "https://www.youtube.com/watch?v=UFAHXZW2hU8"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "NLP",
    videos: [
      "https://www.youtube.com/watch?v=yiNS_Sh9KDA"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Deep Learning",
    videos: [
      "https://www.youtube.com/watch?v=losbBdEjyN4",
      "https://www.youtube.com/watch?v=dh3ilHzIRd0",
      "https://www.youtube.com/watch?v=0Q4yhrkwn7c",
      "https://www.youtube.com/watch?v=i2tlbIGyzKk"
    ].map(v => ({ id: extractId(v), url: v }))
  },
  {
    name: "Recursion",
    videos: [
      "https://www.youtube.com/watch?v=kHi1DUhp9kM",
      "https://www.youtube.com/watch?v=ZQMQW8YVuZ4",
      "https://www.youtube.com/watch?v=Xu5RqPdABRE",
      "https://www.youtube.com/watch?v=qDJJBZAIXIw",
      "https://www.youtube.com/watch?v=aqLTbtWh40E",
      "https://www.youtube.com/watch?v=AZ4jEY_JAVc",
      "https://www.youtube.com/watch?v=MOGBRkkOhkY",
      "https://www.youtube.com/watch?v=oCcUNRMl7dA",
      "https://www.youtube.com/watch?v=8YXQ68oHjAs",
      "https://www.youtube.com/watch?v=5P84A0YCo_Y",
      "https://www.youtube.com/watch?v=l45md3RYX7c",
      "https://www.youtube.com/watch?v=Yg5a2FxU4Fo",
      "https://www.youtube.com/watch?v=lfFqW1DTsqM",
      "https://www.youtube.com/watch?v=1cspuQ6qHW0",
      "https://www.youtube.com/watch?v=J2Er5XceU_I",
      "https://www.youtube.com/watch?v=4eOPYDOiwFo",
      "https://www.youtube.com/watch?v=eyCj_u3PoJE",
      "https://www.youtube.com/watch?v=U81n0UYtk98",
      "https://www.youtube.com/watch?v=ULUNeD0N9yI"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Backtracking",
    videos: [
      "https://www.youtube.com/watch?v=R8XzIfEY_xE",
      "https://www.youtube.com/watch?v=9kl-VbTTwYo",
      "https://www.youtube.com/watch?v=cNWKkosDzGE",
      "https://www.youtube.com/watch?v=M5D3KUKH3gE",
      "https://www.youtube.com/watch?v=o9jcvXGP6pI",
      "https://www.youtube.com/watch?v=zC4D7cuaYzo",
      "https://www.youtube.com/watch?v=XZQKgcjbogo",
      "https://www.youtube.com/watch?v=EnRciMd08_g",
      "https://www.youtube.com/watch?v=HAWAG7nil9o",
      "https://www.youtube.com/watch?v=DOXoQfHyc7A",
      "https://www.youtube.com/watch?v=xlKrk3ZO3iM",
      "https://www.youtube.com/watch?v=7AYJLrDxbBU",
      "https://www.youtube.com/watch?v=4Wc_QCxr_WQ",
      "https://www.youtube.com/watch?v=CzM8Y986hIk",
      "https://www.youtube.com/watch?v=_xX2k8Yel38",
      "https://www.youtube.com/watch?v=W24jY4x08YI",
      "https://www.youtube.com/watch?v=VCSmyaEXu_M",
      "https://www.youtube.com/watch?v=UYF5Lzp9jH8",
      "https://www.youtube.com/watch?v=B_rT88Qstec",
      "https://www.youtube.com/watch?v=r3QYHZ47O1A",
      "https://www.youtube.com/watch?v=MlZMrHZCtb8"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Dynamic Programming",
    videos: [
      "https://www.youtube.com/watch?v=nqowUJzG-iM",
      "https://www.youtube.com/watch?v=l02UxPYRmCQ",
      "https://www.youtube.com/watch?v=kvyShbFVaY8",
      "https://www.youtube.com/watch?v=fJbIuhs24zQ",
      "https://www.youtube.com/watch?v=ntCGbPMeqgg",
      "https://www.youtube.com/watch?v=iBnWHZmlIyY",
      "https://www.youtube.com/watch?v=_gPcYovP7wc",
      "https://www.youtube.com/watch?v=UmMh7xp07kY",
      "https://www.youtube.com/watch?v=F7wqWbqYn9g",
      "https://www.youtube.com/watch?v=-GtpxG6l_Mc",
      "https://www.youtube.com/watch?v=ot_XBHyqpFc",
      "https://www.youtube.com/watch?v=Hw6Ygp3JBYw",
      "https://www.youtube.com/watch?v=aycn9KO8_Ls",
      "https://www.youtube.com/watch?v=SZqAQLjDsag",
      "https://www.youtube.com/watch?v=I4UR2T6Ro3w",
      "https://www.youtube.com/watch?v=I-l6PBeERuc",
      "https://www.youtube.com/watch?v=rMfOgY07TFs",
      "https://www.youtube.com/watch?v=4dMlCZTONj8",
      "https://www.youtube.com/watch?v=4Urd0a0BNng",
      "https://www.youtube.com/watch?v=g_hIx4yn9zg",
      "https://www.youtube.com/watch?v=hR3s9rGlMTU",
      "https://www.youtube.com/watch?v=HrybPYpOvz0",
      "https://www.youtube.com/watch?v=x5hQvnUcjiM",
      "https://www.youtube.com/watch?v=823Grn4_dCQ",
      "https://www.youtube.com/watch?v=-fx6aDxcWyg",
      "https://www.youtube.com/watch?v=wuOOOATz_IA",
      "https://www.youtube.com/watch?v=CFwCCNbRuLY",
      "https://www.youtube.com/watch?v=VDhRg-ZJTuc",
      "https://www.youtube.com/watch?v=hbTaCmQGqLg",
      "https://www.youtube.com/watch?v=QVntmksK2es",
      "https://www.youtube.com/watch?v=AEcRW4ylm_c",
      "https://www.youtube.com/watch?v=D7AFvtnDeMU",
      "https://www.youtube.com/watch?v=kMK148J9qEE",
      "https://www.youtube.com/watch?v=9uUVFNOT3_Y",
      "https://www.youtube.com/watch?v=szKVpQtBHh8",
      "https://www.youtube.com/watch?v=fOUlNlawdAU",
      "https://www.youtube.com/watch?v=9h10fqkI7Nk",
      "https://www.youtube.com/watch?v=pGVguAcWX4g",
      "https://www.youtube.com/watch?v=bzXM1Zond9U",
      "https://www.youtube.com/watch?v=SqA0o-DGmEw",
      "https://www.youtube.com/watch?v=VyHEglhbm-A",
      "https://www.youtube.com/watch?v=S49zeUjeUL0",
      "https://www.youtube.com/watch?v=gr2NtY-2QUY",
      "https://www.youtube.com/watch?v=jkygQmOiCCI",
      "https://www.youtube.com/watch?v=qZ5zayHSH2g",
      "https://www.youtube.com/watch?v=d1u2t018Kjg",
      "https://www.youtube.com/watch?v=zmPj_Ee3B8c",
      "https://www.youtube.com/watch?v=Osz-Vwer6rw",
      "https://www.youtube.com/watch?v=ArNyupe-XH0"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "DP on Trees",
    videos: [
      "https://www.youtube.com/watch?v=qZ5zayHSH2g",
      "https://www.youtube.com/watch?v=d1u2t018Kjg",
      "https://www.youtube.com/watch?v=zmPj_Ee3B8c",
      "https://www.youtube.com/watch?v=Osz-Vwer6rw",
      "https://www.youtube.com/watch?v=ArNyupe-XH0"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "Full Stack Projects with Next JS + AI",
    videos: [
      "https://www.youtube.com/watch?v=ruIK7LFBjHI",
      "https://www.youtube.com/watch?v=XXgnVJGm7U0",
      "https://www.youtube.com/watch?v=O_f55bWzsik",
      "https://www.youtube.com/watch?v=-h1O73T0jmo",
      "https://www.youtube.com/watch?v=5VK8rc3GXdc",
      "https://www.youtube.com/watch?v=iVVG9wOXEqQ",
      "https://www.youtube.com/watch?v=RD65hXCZ8Yo",
      "https://www.youtube.com/watch?v=ciXiibK7Gds",
      "https://www.youtube.com/watch?v=DEUi_8e7GLk",
      "https://www.youtube.com/watch?v=oI2hJJSmPXo",
      "https://www.youtube.com/watch?v=31-Qfr2Pc5Q",
      "https://www.youtube.com/watch?v=BamV5jDeJeU",
      "https://www.youtube.com/watch?v=Tol6p9kYhy4",
      "https://www.youtube.com/watch?v=5F6hpwPeUWY",
      "https://www.youtube.com/watch?v=rdaSPdCkoFQ",
      "https://www.youtube.com/watch?v=-AVtkiG0laE",
      "https://www.youtube.com/watch?v=lJbIs8_5aqU",
      "https://www.youtube.com/watch?v=tKDPE219kCE",
      "https://www.youtube.com/watch?v=saoW6BaNamc",
      "https://www.youtube.com/watch?v=Jcn44FZYMUQ",
      "https://www.youtube.com/watch?v=b_4Z_QpEd2Q",
      "https://www.youtube.com/watch?v=sXRDL-EPtrM",
      "https://www.youtube.com/watch?v=PdVSn-w419g",
      "https://www.youtube.com/watch?v=6niOEjus2Vg",
      "https://www.youtube.com/watch?v=zjwj21wzs4U",
      "https://www.youtube.com/watch?v=p3H3FmeyKUM",
      "https://www.youtube.com/watch?v=utInDVvTbWg",
      "https://www.youtube.com/watch?v=VSrcC0y0umc",
      "https://www.youtube.com/watch?v=9dGg1KzWsRA",
      "https://www.youtube.com/watch?v=zcYM_Gqoph4",
      "https://www.youtube.com/watch?v=vjWyqs7eBP4",
      "https://www.youtube.com/watch?v=oE7bVYRFYrU",
      "https://www.youtube.com/watch?v=mvpMEOQ7Ykk",
      "https://www.youtube.com/watch?v=fOtjNm3JoAE",
      "https://www.youtube.com/watch?v=hCSX5zSb3b4",
      "https://www.youtube.com/watch?v=fh1s6UbzJ7k",
      "https://www.youtube.com/watch?v=VjimQ-VEIiE",
      "https://www.youtube.com/watch?v=lHFlpc5auDY",
      "https://www.youtube.com/watch?v=YwcyE1XlUZU",
      "https://www.youtube.com/watch?v=TXlu7nUMjCw",
      "https://www.youtube.com/watch?v=8gtO-J69mIE",
      "https://www.youtube.com/watch?v=P4D20QVX7Aw",
      "https://www.youtube.com/watch?v=eMplIjZ80Zs",
      "https://www.youtube.com/watch?v=bxhDP-e4NDA",
      "https://www.youtube.com/watch?v=dJPVV0nFFWY",
      "https://www.youtube.com/watch?v=6GKFEqB8LWo",
      "https://www.youtube.com/watch?v=2HQ0LCyfxhc",
      "https://www.youtube.com/watch?v=f_7grfh9TxU",
      "https://www.youtube.com/watch?v=ZcZu1NYx-WE",
      "https://www.youtube.com/watch?v=egQajXL7nn4",
      "https://www.youtube.com/watch?v=RiUh_8VTGYM",
      "https://www.youtube.com/watch?v=s28yOCBVgGw"
    ].map(v => ({ id: extractId(v), url: v }))
  },

  {
    name: "System Design",
    videos: [
      "https://www.youtube.com/watch?v=43-X22tdxiI",
      "https://www.youtube.com/watch?v=z4AUhxIWKSM",
      "https://www.youtube.com/watch?v=MPxr1q8ORuA",
      "https://www.youtube.com/watch?v=cG3LMd2hIXY",
      "https://www.youtube.com/watch?v=IhemzDuCwgU",
      "https://www.youtube.com/watch?v=Cdh9qAwFNNk",
      "https://www.youtube.com/watch?v=2GKay0Mwk4U",
      "https://www.youtube.com/watch?v=rb2R5I9S5d8",
      "https://www.youtube.com/watch?v=27wYlcIYAO8",
      "https://www.youtube.com/watch?v=dHjHXis1r24",
      "https://www.youtube.com/watch?v=d9kA8CW8Cns",
      "https://www.youtube.com/watch?v=bIBC_RQtS2E",
      "https://www.youtube.com/watch?v=xBTGln828Ps",
      "https://www.youtube.com/watch?v=IaDU8_KjrpY",
      "https://www.youtube.com/watch?v=ZtpIzSZbuh0",
      "https://www.youtube.com/watch?v=VOrpRnE24KI",
      "https://www.youtube.com/watch?v=qxFj8X8n6CE",
      "https://www.youtube.com/watch?v=z7wB95TXB8M",
      "https://www.youtube.com/watch?v=o8HgXxqsYBc",
      "https://www.youtube.com/watch?v=xXtig5uLQS4",
      "https://www.youtube.com/watch?v=W7ppbYgrhwg",
      "https://www.youtube.com/watch?v=MyiLxH8St0U",
      "https://www.youtube.com/watch?v=6HKwwJOFHOY",
      "https://www.youtube.com/watch?v=1_8a8-__6ts",
      "https://www.youtube.com/watch?v=zaArcSrLPa8",
      "https://www.youtube.com/watch?v=SvBnrJKzH8k",
      "https://www.youtube.com/watch?v=B76BhEq1FN8",
      "https://www.youtube.com/watch?v=2x1L563nTlU",
      "https://www.youtube.com/watch?v=VPnYuwwg0rU",
      "https://www.youtube.com/watch?v=EYQijvnyYp0",
      "https://www.youtube.com/watch?v=dBtpV7aN_20",
      "https://www.youtube.com/watch?v=Q5jPD2ECEgM",
      "https://www.youtube.com/watch?v=9csfoQK2T8g",
      "https://www.youtube.com/watch?v=k8AObcX8azM"
    ].map(v => ({ id: extractId(v), url: v }))
  },
  {
    name: "DevOps",
    videos: [
      "https://www.youtube.com/watch?v=ZbG0c87wcM8",
      "https://www.youtube.com/watch?v=apGV9Kg7ics",
      "https://www.youtube.com/watch?v=IPvYjXCsTg8",
      "https://www.youtube.com/watch?v=iwolPf6kN-k",
      "https://www.youtube.com/watch?v=IA90BTozdow",
      "https://www.youtube.com/watch?v=17Bl31rlnRM",
      "https://www.youtube.com/watch?v=KVBON1lA9N8",
      "https://www.youtube.com/watch?v=8YLsQIG2Svo",
      "https://www.youtube.com/watch?v=62N8UiWUdQo",
      "https://www.youtube.com/watch?v=QaPPSWHgd8c"
    ].map(v => ({ id: extractId(v), url: v }))
  }
];

export default courses;