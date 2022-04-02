let armenian = {
  colorGreen: "կանաչ",
  colorPurple: "մանուշակագույն",
  colorBlue: "Կապույտ",
  colorBrown: "շագանակագույն",
  about: `խաղի մասին`,
  about1: ` 2048-ը մեկ խաղացողի համար նախատեսված լոգարիթմական կղմինդր հանելուկ տեսախաղ է, որը գրված է
                 իտալացի վեբ ծրագրավորող Գաբրիել Սիրուլլիի կողմից և հրապարակվել է
                 GitHub. Խաղի նպատակն է սահեցնել համարակալված սալիկները
                 ցանց՝ դրանք միավորելու համար՝ 2048 թվով սալիկ ստեղծելու համար;
                 այնուամենայնիվ, կարելի է շարունակել խաղը հասնելուց հետո
                 նպատակ՝ ստեղծելով ավելի մեծ թվերով սալիկներ: Ի սկզբանե եղել է
                 գրվել է JavaScript-ով և CSS-ով մեկ շաբաթվա ընթացքում և թողարկվել 9-ին
                 2014 թվականի մարտ՝ որպես MIT-ին ենթակա անվճար և բաց կոդով ծրագրակազմ
                 լիցենզիա. iOS-ի և Android-ի տարբերակները հաջորդեցին 2014 թվականի մայիսին:,`,
  about2: `2048-ը նախատեսված էր լինել երկու այլ խաղերի բարելավված տարբերակը,
                 որոնք երկուսն էլ կլոններ էին iOS խաղի Threes-ի թողարկված ա
                 ամիս առաջ։ Ինքը՝ Սիրուլլին, 2048 թվականը նկարագրել է որպես գոյություն
                 «հայեցակարգով նման» Threes-ին[2]։ 2048 թվականի թողարկում
                 հանգեցրեց շատ նմանատիպ խաղերի արագ տեսքին, որոնք նման են
                 The Flood of Flappy Bird տատանումները 2013 թ. Խաղը ստացվել է
                 ընդհանուր առմամբ դրական ակնարկներ քննադատների կողմից, այն նկարագրված է
                 որպես «վիրուսային» և «կախվածություն»:`,
  gameplay: `խաղախաղ`,
  about3: `2048-ը խաղում է պարզ 4×4 ցանցի վրա՝ համարակալված սալիկներով
                 սահում են, երբ խաղացողը դրանք տեղափոխում է՝ օգտագործելով չորս սլաք ստեղները:[3]
                 Ամեն հերթափոխի վրա պատահականորեն նոր սալիկ է հայտնվում դատարկ տեղում
                 2 կամ 4 արժեք ունեցող տախտակ:[4] Սալիկները սահում են այնքան հեռու
                 հնարավոր է ընտրված ուղղությամբ, քանի դեռ դրանք չեն կանգնեցվել
                 կամ մեկ այլ կղմինդր կամ ցանցի եզրին: Եթե երկու սալիկ է
                 նույն թվով բախվում են շարժվելիս, դրանք կմիավորվեն սալիկի մեջ
                 բախված երկու սալիկների ընդհանուր արժեքով։[5][6] Այն
                 արդյունքում սալիկը չի կարող կրկին միաձուլվել մեկ այլ սալիկի հետ նույն տեղում
                 շարժվել. Ավելի բարձր միավոր ունեցող սալիկներն արձակում են փափուկ փայլ [4], ամենաբարձրը
                 հնարավոր սալիկը՝ 131,072։[7]`,
  about4: `Եթե շարժումը հանգեցնում է նույն արժեքի երեք հաջորդական սալիկների
                 սահեցրեք միասին, միայն երկու սալիկներն ամենահեռու ուղղությամբ
                 շարժումը կմիավորվի: Եթե բոլոր չորս բացատները անընդմեջ կամ սյունակում են
                 լցված են նույն արժեքի սալիկներով, դրան զուգահեռ քայլ
                 տողը/սյունակը կմիավորի առաջին երկուսը և վերջին երկուսը:[8] Ա
                 Վերևի աջ կողմում գտնվող ցուցատախտակը հետևում է օգտվողի գնահատականին:
                 Օգտագործողի միավորը սկսվում է զրոյից և ավելանում է, երբ երկուսը
                 սալիկները միավորվում են՝ ըստ նոր սալիկի արժեքի։[4] Խաղը շահած է
                 երբ գրատախտակին հայտնվում է 2048 արժեք ունեցող սալիկ։ Խաղացողներ
                 կարող է շարունակել դրանից դուրս՝ ավելի բարձր միավորների հասնելու համար:[9][10][11] Երբ
                 խաղացողը չունի օրինական շարժումներ (դատարկ տարածքներ չկան և ոչ
                 հարակից սալիկներ նույն արժեքով), խաղն ավարտվում է։[2][12]`,
  development: `Զարգացում`,
  about5: `19-ամյա Գաբրիել Սիրուլլին խաղը ստեղծել է սինգլում
                հանգստյան օրերը որպես թեստ՝ տեսնելու, թե արդյոք նա կարող է ծրագրավորել խաղը
                քերծվածք.[15] «Դա ժամանակն անցկացնելու միջոց էր»,- ասաց նա[16]։ Նա
                այն բնութագրել է որպես «հայեցակարգային առումով նման» վերջերս
                թողարկված «IOS» խաղը՝ Threes, [2][17] և մեկ այլ խաղի կլոն,
                1024 թ.[18] Մշակված է Veewo Studio-ի կողմից,[19] 1024-ն ինքնին կլոն է
                Threes-ի իր App Store-ի նկարագրությամբ, որը մի անգամ կարդալով «կարիք չկա
                վճարել երեքների համար»:[20] Cirulli-ի README-ը 2048 թվականին մեջբերում է մեկ այլ.
                1024 կլոնը որպես ազդեցություն. համանուն, բայց մի փոքր տարբեր
                մեխանիկայի առումով 2048 Saming-ի կողմից[21]. Ցիրուլլին զարմացավ
                երբ նրա հանգստյան նախագիծն ավելի քան 4 միլիոն այցելու է ընդունել
                մեկ շաբաթից պակաս [3][22] Խաղը անվճար է, Cirulli
                ասելով, որ ինքը չի ցանկանում գումար աշխատել «հայեցակարգից
                որ [նա] չի հորինել».[23] Նա թողարկեց նավահանգիստներ iOS-ի և
                Android-ը 2014 թվականի մայիսին։[24]`,
  howtoplay: `Ինչպես խաղալ`,
  howtoplay1: `Միավորել նույն թվի սալիկները՝ փորձելով սալիկ ստեղծել
                 2048 արժեքով։`,
  howtoplay2: `Սլաքների ստեղները սեղմելը կամ խաղատախտակի վրայով սահեցնելը դա կլինի
                 տեղափոխեք բոլոր սալիկները սեղմված ստեղնի ուղղությամբ/սահեցրեք: հետո
                 բոլոր սալիկները կատարվում են տեղափոխելով 2 կամ արժեքով նոր սալիկ
                 4-ը կստեղծվի պատահական դատարկ վանդակում:`,
  howtoplay3: `Նույն թվով երկու սալիկ կմիավորվեն, երբ բախվեն
                 ստեղծել կրկնակի արժեք ունեցող մեկ սալիկ:`,
  howtoplay4: `Խաղն ավարտված է, երբ շարժվելու վավեր ուղիներ չկան
                 սալիկները։`,
  newGame: `Նոր խաղ`,
  score: `միավոր`,
  gameover: `խաղն ավարտված է`,
  youwin: `դու հաղթեցիր`,
};

export default armenian;