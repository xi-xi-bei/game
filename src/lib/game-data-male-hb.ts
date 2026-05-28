import type { PerspectiveData, DiseaseType } from './game-types';

const disease: DiseaseType = 'hepatitisB';

export const maleHbData: PerspectiveData = {
  perspective: 'male',
  title: '男性育龄视角 · 乙肝',
  subtitle: '筛查责任，守护家庭',
  description: '你是一位育龄男性，可能不知不觉中携带乙肝病毒。男性是无症状携带的高发群体，你的主动筛查和坦诚告知，是保护妻子和孩子的第一道防线。乙肝可防可控——疫苗保护率超95%，规范治疗后可安全备孕。',
  protagonistName: '小军',
  protagonistAge: 32,
  protagonistStatus: '已婚，与妻子结婚1年，近期开始考虑要孩子',
  diseaseAssigned: disease,
  startNodeId: 'mhb_intro',
  nodes: {
    // ========== 开篇引入 ==========
    mhb_intro: {
      id: 'mhb_intro',
      stage: 'intro',
      sceneTitle: '小军的故事',
      narrative:
        '你叫小军，32岁，在一家外企做销售经理。和妻子小雪结婚一年，最近开始考虑要孩子。\n\n生活一切顺遂——至少你以为是这样。你不知道的是，你身体里可能一直藏着一个"沉默的室友"……',
      knowledge: {
        title: '乙肝——男性必须知道的沉默威胁',
        content:
          '乙肝对男性育龄人群的特殊风险：\n\n🛡️ 男性可无症状携带乙肝病毒数十年\n🛡️ 无症状≠不传染，可传播给伴侣和胎儿\n🛡️ 男性婚前/备孕筛查是保护家庭的第一道防线\n🛡️ 乙肝疫苗保护率>95%，伴侣接种后可安全亲密接触\n\n💡 关键认知：乙肝不可怕，怕的是不知道自己携带、不告诉伴侣、不做防护。',
        type: 'info',
      },
      nextNodeId: 'mhb_risk',
    },

    // ========== 高危场景 ==========
    mhb_risk: {
      id: 'mhb_risk',
      stage: 'high_risk',
      sceneTitle: '不以为意的习惯',
      narrative:
        '大学时候，你和室友共用过剃须刀。那时候大家都不在意——兄弟之间借个东西有什么大不了的？\n\n工作后偶尔也去纹身店"补过色"。那家店看起来挺干净的……至少你是这么认为的。\n\n结婚后你从来没做过乙肝检查。你觉得自己身体好，能吃能睡，不可能有什么问题。\n\n但你不知道的是，乙肝病毒可能早就通过那些不经意的接触，悄悄潜入了你的身体。它最擅长做的事情就是——沉默。',
      knowledge: {
        title: '乙肝的隐匿传播途径',
        content:
          '乙肝的传播不只是亲密接触：\n\n🔬 血液传播是乙肝最重要的传播途径之一\n🔬 共用剃须刀、牙刷——微量血液即可传播\n🔬 不规范纹身、穿孔——器械消毒不彻底=传播风险\n🔬 男性是无症状携带的高发群体\n\n⚠️ 关键认知：乙肝病毒在体外可存活7天以上，微量血液就足以传播。共用个人卫生物品绝对不可取。',
        type: 'warning',
      },
      choices: [
        {
          id: 'mhb_r_1',
          text: '原来有这些风险，应该去做个检查',
          isCorrect: true,
          knowledge: {
            title: '主动筛查是最负责任的选择',
            content:
              '男性主动做乙肝检查的意义：\n\n✅ 了解自己的感染状况\n✅ 保护伴侣不被传染\n✅ 提前规划备孕方案\n✅ 疫苗接种可有效预防\n\n作为丈夫和准爸爸，主动筛查是对家庭最大的负责。',
            type: 'correct',
          },
          nextNodeId: 'mhb_test_active',
          tags: ['tested'],
        },
        {
          id: 'mhb_r_2',
          text: '身体没什么不舒服，应该不用查吧',
          isCorrect: false,
          knowledge: {
            title: '"没症状"是乙肝最好的伪装',
            content:
              '乙肝的沉默特性：\n\n❌ 乙肝可无症状携带数十年\n❌ 肝脏没有痛觉神经→损伤了也感觉不到\n❌ 很多乙肝携带者直到体检才发现\n❌ 等有症状时往往已发展为肝硬化甚至肝癌\n\n💡 "没症状"≠没问题，主动筛查是唯一的确定性。',
            type: 'danger',
          },
          nextNodeId: 'mhb_test_ignore',
          tags: ['ignored_exposure'],
        },
      ],
    },

    // ========== 主动检测路径 ==========
    mhb_test_active: {
      id: 'mhb_test_active',
      stage: 'test_result',
      sceneTitle: '主动检测',
      narrative:
        '你去医院做了乙肝五项检查。结果显示——\n\n乙肝表面抗原（HBsAg）阳性，乙肝e抗原（HBeAg）阳性，病毒载量较高。\n\n医生说："你是乙肝\u2018大三阳\u2019，病毒复制活跃，传染性较强。但你不用恐慌——现在有很多有效的抗病毒药物可以控制病毒。关键是：你的妻子需要立即做乙肝检查，如果她没有抗体，需要尽快接种疫苗。"',
      knowledge: {
        title: '乙肝"大三阳"与男性传播责任',
        content:
          '乙肝"大三阳"的医学含义：\n\n🔬 HBsAg阳性→体内有乙肝病毒\n🔬 HBeAg阳性→病毒复制活跃，传染性强\n🔬 男性大三阳→可通过性接触传播给伴侣\n🔬 伴侣感染→可进一步母婴传播给胎儿\n\n📋 男性确诊后的首要行动：\n1️⃣ 告知伴侣，让她做乙肝检查\n2️⃣ 如伴侣无抗体→立即接种乙肝疫苗\n3️⃣ 自己开始规范抗病毒治疗\n4️⃣ 病毒载量控制后再备孕',
        type: 'correct',
      },
      choices: [
        {
          id: 'mhb_ta_1',
          text: '立刻告诉小雪，让她也去检查',
          isCorrect: true,
          knowledge: {
            title: '坦诚告知是男性最大的责任',
            content:
              '男性告知伴侣乙肝感染是保护家庭的关键：\n\n✅ 小雪做检查→确认她的感染状况和抗体水平\n✅ 如无抗体→接种疫苗→保护率>95%\n✅ 一起制定科学的备孕计划\n✅ 你开始抗病毒治疗→降低传染性\n\n作为丈夫，坦诚告知是最基本的责任，也是最有力的保护。',
            type: 'correct',
          },
          nextNodeId: 'mhb_tell_honest',
          tags: ['honest'],
        },
        {
          id: 'mhb_ta_2',
          text: '先不告诉她，自己先吃药控制',
          isCorrect: false,
          knowledge: {
            title: '男性隐瞒乙肝=拿妻子的健康冒险',
            content:
              '男性隐瞒乙肝的危害：\n\n❌ 小雪不知道你需要防护→亲密接触无保护→她可能被感染\n❌ 小雪没有接种疫苗→完全暴露在风险中\n❌ 小雪如被感染→母婴传播风险极高\n❌ 小雪如已怀孕→胎儿面临感染风险\n\n💡 男性是乙肝家庭传播的关键节点。你一个坦诚，可以保护整个家庭。',
            type: 'danger',
          },
          nextNodeId: 'mhb_tell_hide',
          tags: ['hidden'],
        },
      ],
    },

    // ========== 忽略检测路径 ==========
    mhb_test_ignore: {
      id: 'mhb_test_ignore',
      stage: 'test_result',
      sceneTitle: '沉默的携带者',
      narrative:
        '你觉得没必要检查，日子照常过着。和小雪的亲密接触没有任何防护——你从来不知道自己需要防护什么。\n\n乙肝病毒在你体内悄无声息地复制着，而每一次无保护的亲密接触，都在把风险传递给小雪。\n\n你不知道的是，乙肝病毒在体外可以存活7天，你用过的剃须刀上可能残留着带有病毒的微量血液……',
      knowledge: {
        title: '无症状携带者=家庭传播源',
        content:
          '男性无症状携带乙肝的危害：\n\n🔬 亲密接触传播：无保护高危接触可传播乙肝\n🔬 日常生活：共用剃须刀、牙刷等可传播\n🔬 精液中含有乙肝病毒→接触传播效率高\n🔬 男性不知道自己携带→无法采取任何防护措施\n\n⚠️ 最大的风险不是疾病本身，而是"不知道"。',
        type: 'warning',
      },
      nextNodeId: 'mhb_post_ignore',
    },

    // ========== 忽略检测后的进展 ==========
    mhb_post_ignore: {
      id: 'mhb_post_ignore',
      stage: 'post_exposure',
      sceneTitle: '暗流涌动',
      narrative:
        '日子一天天过去。你和妻子开始考虑要孩子，期待着新生命的到来。\n\n一切都那么美好——除了你从来不知道自己携带乙肝病毒这件事。\n\n小雪从未做过乙肝检查，也不知道需要接种疫苗。你们对即将到来的备孕毫无防备……',
      knowledge: {
        title: '男性未筛查=全家无防护',
        content:
          '男性不做乙肝筛查的连锁风险：\n\n🔗 你不知道自己携带→不会告知小雪→她不检查→她没打疫苗\n🔗 亲密接触无防护→小雪可能被感染\n🔗 小雪感染后怀孕→母婴传播→新生儿乙肝\n🔗 新生儿感染乙肝→大概率终身携带\n\n这一整条连锁反应，只需要一次检查和一个坦诚就可以阻断。',
        type: 'danger',
      },
      nextNodeId: 'mhb_premarital_skip',
    },

    // ========== 坦诚告知 ==========
    mhb_tell_honest: {
      id: 'mhb_tell_honest',
      stage: 'tell_partner',
      sceneTitle: '坦诚相告',
      narrative:
        '你约小雪坐下来谈。"有件事我必须告诉你——我查出乙肝了。"\n\n小雪愣了一下，然后问："那我会不会被传染？我们还能要孩子吗？"\n\n你把医生说的话告诉了她：乙肝疫苗保护率>95%，她只要打了疫苗就有了保护屏障；你自己规范治疗后病毒载量可以控制到很低，完全可以安全备孕。\n\n小雪去做了检查——她没有感染，也没有抗体。医生立即安排了疫苗接种。',
      knowledge: {
        title: '乙肝疫苗——最有效的家庭防护屏障',
        content:
          '乙肝疫苗是保护伴侣的关键：\n\n🛡️ 疫苗保护率>95%，接种后产生抗体即安全\n🛡️ 接种程序：0-1-6月三针\n🛡️ 伴侣产生抗体后可安全亲密接触\n🛡️ 是预防乙肝最经济有效的方法\n\n📋 丈夫乙肝、妻子打疫苗=完整的家庭防护：\n• 妻子有抗体→不会被感染\n• 妻子不感染→不会母婴传播\n• 丈夫规范治疗→降低传染性\n• 科学备孕→安全生育健康宝宝',
        type: 'correct',
      },
      nextNodeId: 'mhb_premarital_honest',
    },

    // ========== 隐瞒路径 ==========
    mhb_tell_hide: {
      id: 'mhb_tell_hide',
      stage: 'tell_partner',
      sceneTitle: '独自承受',
      narrative:
        '你选择隐瞒。自己偷偷开始吃抗病毒药，心想"等病毒降下来了再说"。\n\n但你忽略了几件事：\n1. 抗病毒药起效需要时间，期间仍有传染性\n2. 小雪没有做检查——不知道她是否已有抗体\n3. 小雪没有打疫苗——完全暴露在风险中\n4. 你不知道是否通过日常接触已经把病毒带给了小雪\n\n你以为自己在保护这段婚姻，实际上你在用小雪的健康做赌注。',
      knowledge: {
        title: '男性隐瞒乙肝的后果链',
        content:
          '男性隐瞒乙肝对家庭的危害链：\n\n❌ 小雪不检查→不知道自己是否有抗体\n❌ 小雪没打疫苗→持续暴露在风险中\n❌ 亲密接触无防护→小雪可能已被感染\n❌ 小雪感染后怀孕→母婴传播→新生儿乙肝\n\n💡 男性是乙肝家庭传播的关键环节。你隐瞒的不是自己的事，而是整个家庭的健康。',
        type: 'danger',
      },
      nextNodeId: 'mhb_premarital_hide',
    },

    // ========== 婚前检查 - 坦诚路径 ==========
    mhb_premarital_honest: {
      id: 'mhb_premarital_honest',
      stage: 'premarital',
      sceneTitle: '婚检——守护家庭的第一步',
      narrative:
        '你们一起去做了婚前医学检查。因为已经知道你的情况，医生给出了完整的指导方案。\n\n经过3个月的抗病毒治疗，你的病毒载量已大幅下降。小雪完成了乙肝疫苗接种，抗体水平良好。\n\n医生说："你们是目前做得最好的夫妻——丈夫规范治疗，妻子成功接种。等你的病毒载量进一步降低，就可以安全备孕了。"',
      knowledge: {
        title: '婚检+坦诚+疫苗=最完整的家庭防护',
        content:
          '婚检对男性育龄人群的重要意义：\n\n🔍 发现隐匿感染→保护伴侣\n🔍 评估婚育风险→制定科学方案\n🔍 免费且私密→没有理由不做\n\n📋 男性乙肝+妻子接种疫苗的防护效果：\n• 妻子抗体阳性→不会被感染\n• 无母婴传播风险\n• 丈夫规范治疗→传染性极低\n• 完全可以安全生育健康宝宝',
        type: 'correct',
      },
      choices: [
        {
          id: 'mhb_pm_h_1',
          text: '继续规范治疗，等病毒载量达标后再备孕',
          isCorrect: true,
          knowledge: {
            title: '男性乙肝治疗后备孕标准',
            content:
              '男性乙肝治疗后备孕要点：\n\n📋 治疗目标：\n• 病毒载量（HBV DNA）检测不到或极低\n• 肝功能正常\n• 规律服药，不可自行停药\n\n📋 备孕时机：\n• 病毒载量达标\n• 妻子抗体阳性\n• 在医生指导下开始备孕\n\n✅ 规范治疗+妻子接种疫苗=安全备孕！',
            type: 'correct',
          },
          nextNodeId: 'mhb_prepregnancy_honest',
          tags: ['honest', 'premarital_check'],
        },
        {
          id: 'mhb_pm_h_2',
          text: '先不急着备孕，但治疗的事也先放一放',
          isCorrect: false,
          knowledge: {
            title: '乙肝治疗不能等！',
            content:
              '乙肝拖延治疗的后果比想象更严重：\n\n⚠️ 不治疗=病毒持续复制=肝功能持续受损\n⚠️ 长期慢性炎症→肝硬化→肝癌，这不是吓人，是医学事实\n⚠️ 传染性居高不下=家人持续暴露\n⚠️ 拖得越久，治疗效果越差\n\n💡 乙肝抗病毒治疗越早开始效果越好。早治疗可以稳定病情、降低传染性，是保护全家的第一步。',
            type: 'warning',
          },
          nextNodeId: 'mhb_prepregnancy_delay',
          tags: ['honest', 'delayed_treatment'],
        },
      ],
    },

    // ========== 婚前检查 - 隐瞒路径 ==========
    mhb_premarital_hide: {
      id: 'mhb_premarital_hide',
      stage: 'premarital',
      sceneTitle: '逃避婚检',
      narrative:
        '领证前，社区通知免费婚检。你心里一紧——婚检会查乙肝，万一小雪知道了……\n\n"婚检又不是强制的，我们身体都好，不用查。"你这样跟小雪说。\n\n小雪觉得你说得有道理，就同意了。你们跳过了婚检，顺利领证。\n\n你松了口气——但你关闭了最重要的发现窗口。小雪依然不知道你需要防护，也不知道自己需要接种疫苗。',
      choices: [
        {
          id: 'mhb_pm_hd_1',
          text: '已经领证了，开始备孕吧',
          isCorrect: false,
          knowledge: {
            title: '隐瞒+跳过婚检+直接备孕=最危险组合',
            content:
              '男性隐瞒乙肝+跳过婚检+直接备孕的风险：\n\n❌ 小雪没查乙肝→不知道自己有没有抗体\n❌ 小雪没打疫苗→完全暴露在感染风险中\n❌ 你的病毒载量未确认→传染性不明\n❌ 小雪如被感染→母婴传播→新生儿乙肝\n\n这是把整个家庭置于风险中的决定。',
            type: 'danger',
          },
          nextNodeId: 'mhb_prepregnancy_hide',
          tags: ['hidden', 'skipped_check', 'direct_pregnancy'],
        },
        {
          id: 'mhb_pm_hd_2',
          text: '虽然跳过了婚检，备孕前应该去做孕前检查',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，犹未为晚',
            content:
              '虽然跳过婚检，孕前检查仍是重要关口：\n\n✅ 孕前检查包含艾梅乙筛查\n✅ 可以确认小雪的乙肝抗体状况\n✅ 如无抗体→立即接种疫苗\n✅ 评估你的治疗效果和传染性\n\n重要的不是之前错过了什么，而是现在开始做正确的事。',
            type: 'info',
          },
          nextNodeId: 'mhb_prepregnancy_late_check',
          tags: ['hidden', 'late_check'],
        },
      ],
    },

    // ========== 婚前检查 - 未检测路径 ==========
    mhb_premarital_skip: {
      id: 'mhb_premarital_skip',
      stage: 'premarital',
      sceneTitle: '婚检机会',
      narrative:
        '领证前，社区通知免费婚检。小雪说："去做个婚检吧，也是对彼此负责。"',
      choices: [
        {
          id: 'mhb_pm_s_1',
          text: '去做婚检，查一下也没什么坏处',
          isCorrect: true,
          knowledge: {
            title: '婚检是发现隐匿感染的关键机会',
            content:
              '乙肝在男性中的隐匿特点：\n\n• 无症状携带→自己完全不知道\n• 肝脏没有痛觉→损伤了也感觉不到\n• 只有血液检测才能发现\n• 婚检是主动发现的最佳窗口\n\n主动筛查是唯一的确定性。',
            type: 'correct',
          },
          nextNodeId: 'mhb_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'mhb_pm_s_2',
          text: '身体好好的，不用浪费那个时间',
          isCorrect: false,
          knowledge: {
            title: '"感觉没事"是最危险的判断',
            content:
              '乙肝最大的欺骗性就是"沉默"：\n\n❌ 可无症状携带数十年\n❌ 肝脏无痛觉神经→损伤无声\n❌ 等有症状时往往已严重\n❌ 无症状≠不传染→恰恰是最危险的传播源\n\n主动筛查是唯一可靠的方式。',
            type: 'danger',
          },
          nextNodeId: 'mhb_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚检发现感染 ==========
    mhb_premarital_check_discover: {
      id: 'mhb_premarital_check_discover',
      stage: 'premarital',
      sceneTitle: '婚检意外发现',
      narrative:
        '婚检结果出来了——乙肝表面抗原（HBsAg）阳性。你竟然是乙肝携带者！\n\n小雪坐在旁边，看着报告问："乙肝？你之前不知道吗？"',
      choices: [
        {
          id: 'mhb_pm_cd_1',
          text: '"我真的不知道。但现在查出来了，我们一起面对。"',
          isCorrect: true,
          knowledge: {
            title: '发现后积极面对是最佳选择',
            content:
              '婚检发现乙肝后的正确应对：\n\n✅ 你开始规范抗病毒治疗\n✅ 小雪做乙肝检查+接种乙肝疫苗\n✅ 制定科学的备孕计划\n✅ 婚检帮你发现了问题——这就是婚检的价值\n\n不知道不丢人，知道了还不做才丢人。',
            type: 'correct',
          },
          nextNodeId: 'mhb_prepregnancy_honest_late',
          tags: ['tested_late', 'honest_late'],
        },
        {
          id: 'mhb_pm_cd_2',
          text: '"可能搞错了吧，我身体一直很好啊"',
          isCorrect: false,
          knowledge: {
            title: '否认结果=拒绝保护',
            content:
              '否认婚检结果的危害：\n\n❌ 不开始治疗→病毒持续复制→肝脏持续损伤\n❌ 小雪不做检查→不知道自己是否需要疫苗\n❌ 继续无防护接触→小雪可能被感染\n\n婚检结果是科学数据，不是建议。早面对=早保护。',
            type: 'danger',
          },
          nextNodeId: 'mhb_premarital_skip_all',
          tags: ['skipped_check'],
        },
      ],
    },

    // ========== 完全跳过婚检 ==========
    mhb_premarital_skip_all: {
      id: 'mhb_premarital_skip_all',
      stage: 'premarital',
      sceneTitle: '跳过婚检',
      narrative:
        '你们跳过了婚检，顺利领证。你安慰自己："身体好着呢，没事。"\n\n婚后很快开始备孕，两个月后小雪怀孕了。\n\n没有人知道，你体内的乙肝病毒正通过每一次亲密接触、每一个共享的剃须刀，悄悄威胁着小雪和即将到来的宝宝……',
      knowledge: {
        title: '跳过婚检=放弃主动权',
        content:
          '婚前检查是发现隐匿感染的黄金窗口：\n\n• 跳过婚检→不知道自己携带乙肝→无防护备孕\n• 男性携带→可传播给伴侣和胎儿\n• 乙肝母婴传播是新生儿感染的主要途径\n\n婚检不是负担，而是保障。免费的、私密的、科学的——没有理由跳过。',
        type: 'warning',
      },
      nextNodeId: 'mhb_prenatal_skip_all',
    },

    // ========== 孕前检查 - 坦诚路径 ==========
    mhb_prepregnancy_honest: {
      id: 'mhb_prepregnancy_honest',
      stage: 'prepregnancy',
      sceneTitle: '科学备孕',
      narrative:
        '经过半年的规范治疗，你的病毒载量已检测不到。小雪的乙肝抗体水平也很好。\n\n医生说："你们的情况非常理想。丈夫病毒控制良好，妻子抗体充足，可以安全备孕。"\n\n好消息——小雪怀孕了！',
      knowledge: {
        title: '男性乙肝治疗后安全备孕',
        content:
          '男性乙肝规范治疗后备孕要点：\n\n📋 治疗目标：\n• HBV DNA检测不到或极低\n• 肝功能正常\n• 规律服药，不可自行停药\n\n📋 家庭防护：\n• 妻子抗体阳性→不会被感染\n• 孕期无需特殊干预（因为妈妈没感染）\n• 宝宝出生后按常规接种乙肝疫苗即可\n\n✅ 规范治疗+妻子接种=安全备孕！',
        type: 'correct',
      },
      nextNodeId: 'mhb_prenatal_honest',
    },

    // ========== 孕前检查 - 坦诚（晚发现）==========
    mhb_prepregnancy_honest_late: {
      id: 'mhb_prepregnancy_honest_late',
      stage: 'prepregnancy',
      sceneTitle: '亡羊补牢',
      narrative:
        '虽然发现得晚了一些，但你选择了积极面对。你开始抗病毒治疗，小雪去做了乙肝检查——好在她是阴性，没有感染！\n\n医生立即安排小雪接种乙肝疫苗。三个月后，小雪的抗体水平良好。\n\n"虽然错过了最佳时机，但你们现在做的一切都是正确的。"医生鼓励道。',
      knowledge: {
        title: '晚发现但方向正确，仍然可以守护家庭',
        content:
          '婚检发现乙肝后的积极应对：\n\n✅ 你开始规范治疗→病毒载量下降\n✅ 小雪做检查→发现未感染→立即接种疫苗\n✅ 妻子有抗体=母婴传播链被切断\n✅ 可以安全备孕\n\n"晚一步"总好过"不迈步"。',
        type: 'correct',
      },
      nextNodeId: 'mhb_prenatal_honest',
    },

    // ========== 孕前检查 - 隐瞒路径 ==========
    mhb_prepregnancy_hide: {
      id: 'mhb_prepregnancy_hide',
      stage: 'prepregnancy',
      sceneTitle: '侥幸备孕',
      narrative:
        '你隐瞒了乙肝的事实，和小雪开始备孕。你自己偷偷吃药，觉得"吃着药应该没事吧"。\n\n小雪没有做乙肝检查，也没有接种疫苗。你们对即将到来的风险一无所知。\n\n两个月后小雪怀孕了。你既兴奋又不安——你不确定自己是否真的控制住了病毒，更不知道小雪是否已经被感染。',
      knowledge: {
        title: '未确认病毒控制+伴侣未接种=高风险赌博',
        content:
          '男性隐瞒乙肝就备孕的风险：\n\n❌ 你的病毒载量未确认→传染性不明\n❌ 小雪未做检查→不知道是否已被感染\n❌ 小雪没打疫苗→完全暴露\n❌ 如小雪感染→母婴传播→新生儿乙肝概率极高\n\n"吃着药≠治好了"，必须通过检查确认。',
        type: 'danger',
      },
      nextNodeId: 'mhb_prenatal_hide',
    },

    // ========== 孕前检查 - 补查路径 ==========
    mhb_prepregnancy_late_check: {
      id: 'mhb_prepregnancy_late_check',
      stage: 'prepregnancy',
      sceneTitle: '孕前补查',
      narrative:
        '虽然跳过了婚检，但你决定去做孕前检查。结果显示你确实携带乙肝病毒，病毒载量较高。\n\n这一次，你终于说了实话——关于你知道自己可能携带乙肝的事，关于你一直以来的隐瞒。\n\n小雪沉默了很久，最后说："你为什么不早点告诉我？我连疫苗都没打过。"',
      choices: [
        {
          id: 'mhb_ppg_lc_1',
          text: '和小雪一起去看医生，制定治疗方案和备孕计划',
          isCorrect: true,
          knowledge: {
            title: '坦诚之后，科学跟上',
            content:
              '孕前发现男性乙肝后的科学应对：\n\n1️⃣ 你开始规范抗病毒治疗\n2️⃣ 小雪做乙肝检查+接种乙肝疫苗\n3️⃣ 等你的病毒载量达标+小雪抗体产生后再备孕\n4️⃣ 孕期做好产检\n\n虽然隐瞒让人遗憾，但最终选择坦诚和科学，仍然可以守护家庭！',
            type: 'correct',
          },
          nextNodeId: 'mhb_prenatal_honest',
          tags: ['honest_late', 'late_check'],
        },
        {
          id: 'mhb_ppg_lc_2',
          text: '我自己治就行了，小雪不用打疫苗吧',
          isCorrect: false,
          knowledge: {
            title: '妻子必须接种疫苗！',
            content:
              '只治自己不给妻子打疫苗，防护只是一半：\n\n⚠️ 小雪没有抗体=亲密接触中仍可能被感染\n⚠️ 妻子感染乙肝→孕期母婴传播→新生儿乙肝\n⚠️ 乙肝疫苗保护率>95%，是最简单有效的预防手段\n\n💡 给妻子接种疫苗是男性乙肝患者保护家庭最关键的一步。疫苗安全、免费（部分地区）、效果极好，没有理由不打。',
            type: 'warning',
          },
          nextNodeId: 'mhb_prenatal_honest_no_partner_check',
          tags: ['honest_late', 'no_partner_vaccine'],
        },
      ],
    },

    // ========== 孕前检查 - 拖延治疗路径 ==========
    mhb_prepregnancy_delay: {
      id: 'mhb_prepregnancy_delay',
      stage: 'prepregnancy',
      sceneTitle: '治疗拖延',
      narrative:
        '你虽然知道自己携带乙肝病毒，但总觉得"没什么症状就不用管"，没认真做抗病毒治疗。小雪开始催你备孕，你心虚地同意了——但小雪不知道真相，也没打过疫苗。',
      choices: [
        {
          id: 'mhb_ppg_d_1',
          text: '在备孕前向小雪坦白，一起去医院做全面检查',
          isCorrect: true,
          knowledge: {
            title: '坦诚永远不晚',
            content:
              '即使拖延了治疗，只要在备孕前坦白并就医，仍然可以科学防护：\n\n✅ 向小雪坦白——给伴侣知情权\n✅ 你开始规范抗病毒治疗\n✅ 小雪查乙肝抗体+接种疫苗\n✅ 病毒载量达标+抗体产生后再备孕\n\n💡 拖延不是绝路，现在坦白仍然来得及。乙肝可治可控，关键是不再隐瞒。',
            type: 'correct',
          },
          nextNodeId: 'mhb_prenatal_honest',
          tags: ['honest', 'late_start'],
        },
        {
          id: 'mhb_ppg_d_2',
          text: '既然小雪想备孕就顺其自然吧，我这点小事不影响',
          isCorrect: false,
          knowledge: {
            title: '"小事"可能变成大事',
            content:
              '男性乙肝不治疗就备孕，后果远超"小事"：\n\n❌ 小雪没有抗体→可能被感染\n❌ 孕期感染乙肝→母婴传播→新生儿终身携带\n❌ 你的病情也在发展→肝硬化、肝癌风险持续增加\n❌ 家庭聚集性感染→全家健康受损\n\n⚠️ 乙肝不是"男人的小事"，它直接关系到妻子和孩子的健康。疫苗和治疗如此简单，不做才是最大的风险。',
            type: 'danger',
          },
          nextNodeId: 'mhb_prenatal_hide',
          tags: ['hidden', 'passive'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚但伴侣未接种疫苗 ==========
    mhb_prenatal_honest_no_partner_check: {
      id: 'mhb_prenatal_honest_no_partner_check',
      stage: 'prenatal',
      sceneTitle: '伴侣感染风险',
      narrative:
        '你规范治疗了乙肝，但在孕12周产检时，医生发现小雪的乙肝两对半全是阴性——她没有抗体，完全暴露在感染风险中。\n\n"你丈夫是乙肝携带者，你怎么没打过疫苗？"医生问。小雪茫然地看着你——你从没告诉过她。',
      choices: [
        {
          id: 'mhb_pn_hnpc_1',
          text: '立刻让小雪接种乙肝疫苗，重新制定家庭防护方案',
          isCorrect: true,
          knowledge: {
            title: '孕期也可以接种疫苗',
            content:
              '乙肝疫苗在孕期是安全的，可以接种：\n\n✅ 乙肝疫苗是灭活疫苗，孕期接种安全\n✅ 产生抗体后可保护小雪和宝宝\n✅ 你继续规范抗病毒治疗\n✅ 宝宝出生后按常规接种乙肝疫苗\n\n💡 虽然应该更早接种，但孕期打疫苗仍然有效。亡羊补牢，犹未为晚。',
            type: 'correct',
          },
          nextNodeId: 'mhb_prenatal_honest',
          tags: ['honest', 'partner_vaccinated'],
        },
        {
          id: 'mhb_pn_hnpc_2',
          text: '孕期不能打疫苗吧，产后再说',
          isCorrect: false,
          knowledge: {
            title: '孕期乙肝疫苗安全可接种',
            content:
              '很多人误以为孕期不能打疫苗，这是错的：\n\n❌ 乙肝疫苗是灭活疫苗，对孕妇和胎儿安全\n❌ 不接种=小雪整个孕期都没有保护\n❌ 如果孕期感染乙肝→母婴传播风险极高\n\n💡 乙肝疫苗不仅孕期可以打，而且应该尽快打。等待只会增加风险。',
            type: 'warning',
          },
          nextNodeId: 'mhb_prenatal_hide',
          tags: ['hidden', 'delayed_vaccine'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚路径 ==========
    mhb_prenatal_honest: {
      id: 'mhb_prenatal_honest',
      stage: 'prenatal',
      sceneTitle: '守护新生命',
      narrative:
        '孕期一切顺利。小雪每次产检乙肝指标都正常——她有抗体保护，没有被感染。\n\n宝宝出生了——一个健康的男孩！按照常规，宝宝出生后立即接种了乙肝疫苗。\n\n小雪抱着宝宝对你说："还好你告诉我了，还好我打了疫苗。这就是我们给宝宝最好的礼物。"',
      knowledge: {
        title: '男性乙肝规范治疗+妻子接种=家庭安全',
        content:
          '你的经历证明了：\n\n✅ 男性乙肝可规范治疗→病毒可控\n✅ 妻子接种乙肝疫苗→保护率>95%\n✅ 妻子有抗体→不会感染→不会母婴传播\n✅ 坦诚告知是守护家庭的最佳选择\n\n📋 新生儿乙肝防护：\n• 出生后立即接种乙肝疫苗（常规免疫）\n• 爸爸乙肝+妈妈有抗体→宝宝按常规接种即可\n• 妈妈如也是乙肝→需加打乙肝免疫球蛋白',
        type: 'correct',
      },
      nextNodeId: 'mhb_ending_perfect',
    },

    // ========== 孕期产检 - 隐瞒路径 ==========
    mhb_prenatal_hide: {
      id: 'mhb_prenatal_hide',
      stage: 'prenatal',
      sceneTitle: '纸包不住火',
      narrative:
        '孕期产检——小雪的乙肝检查结果出来了：表面抗原阳性。她被感染了。\n\n医生面色凝重："孕妇乙肝阳性，需要立即启动母婴阻断方案。孩子出生后需要注射乙肝免疫球蛋白+乙肝疫苗。"\n\n小雪拿着报告看着你："你早就知道自己有乙肝，是不是？"',
      knowledge: {
        title: '男性隐瞒乙肝导致妻子和胎儿双重风险',
        content:
          '男性隐瞒乙肝的最惨痛后果：\n\n💔 小雪被感染——你传给她的\n💔 孕期乙肝→母婴传播风险极高\n💔 新生儿如感染→大概率终身携带\n💔 信任崩塌→婚姻危机\n\n💡 这一切只需一次坦诚就可以避免。乙肝疫苗保护率>95%，如果小雪接种了疫苗，这一切都不会发生。',
        type: 'danger',
      },
      choices: [
        {
          id: 'mhb_pn_hd_1',
          text: '彻底认错，全力配合母婴阻断治疗',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，全力以赴',
            content:
              '孕期发现乙肝后的母婴阻断方案：\n\n🏥 孕妇治疗：\n• 高病毒载量孕妇→孕晚期开始抗病毒治疗\n• 降低病毒载量→降低母婴传播风险\n\n🏥 新生儿阻断：\n• 出生后12小时内注射乙肝免疫球蛋白\n• 同时接种乙肝疫苗（0-1-6月程序）\n• 母婴阻断成功率>95%\n\n过去的错误无法撤销，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'mhb_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'mhb_pn_hd_2',
          text: '无法面对，选择逃避',
          isCorrect: false,
          knowledge: {
            title: '逃避只会让一切更糟',
            content:
              '孕期逃避的最终后果：\n\n❌ 不做母婴阻断→新生儿感染概率高达90%\n❌ 宝宝终身携带乙肝→未来肝硬化、肝癌风险\n❌ 小雪的病情得不到管理\n❌ 婚姻无法维系\n\n宝宝的健康经不起你的逃避。勇敢面对，是唯一正确的路。',
            type: 'danger',
          },
          nextNodeId: 'mhb_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 完全跳过检查路径 ==========
    mhb_prenatal_skip_all: {
      id: 'mhb_prenatal_skip_all',
      stage: 'prenatal',
      sceneTitle: '孕期意外',
      narrative:
        '小雪怀孕了，去做第一次产检。艾梅乙筛查是产检必查项目——想躲也躲不了。\n\n结果：小雪乙肝表面抗原阳性——她被感染了。追溯源头，你做了检查——你是乙肝携带者。\n\n医生严肃地说："丈夫是乙肝携带者，妻子没打疫苗，这是典型的家庭聚集性感染。现在需要立即启动母婴阻断。"\n\n小雪看着你，眼里满是震惊和受伤。',
      knowledge: {
        title: '产检是最后的防线',
        content:
          '即使跳过了婚检和孕前检查，孕期产检也会发现乙肝感染：\n\n🏥 孕期首次产检必查艾梅乙\n🏥 孕期发现比孕前发现风险更高，但积极阻断仍有效\n\n如果提前做婚检/孕前检查：\n• 你可以规范治疗\n• 小雪可以接种疫苗\n• 完全可以避免感染\n• 宝宝不会面临母婴传播风险\n\n跳过检查不会消除风险，只会推迟发现、增加代价。',
        type: 'warning',
      },
      choices: [
        {
          id: 'mhb_pn_sa_1',
          text: '面对现实，全力配合母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '从现在开始做正确的事',
            content:
              '孕期积极母婴阻断仍可有效保护宝宝：\n\n1️⃣ 小雪开始孕期抗病毒治疗\n2️⃣ 宝宝出生后12小时内注射乙肝免疫球蛋白+疫苗\n3️⃣ 你自己也规范治疗\n4️⃣ 坦诚沟通，用行动弥补\n\n母婴阻断成功率>95%，但前提是你要积极配合！',
            type: 'correct',
          },
          nextNodeId: 'mhb_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'mhb_pn_sa_2',
          text: '无法面对，试图回避',
          isCorrect: false,
          knowledge: {
            title: '逃避的最终代价',
            content:
              '孕期逃避意味着：\n❌ 不做母婴阻断→新生儿感染概率高达90%\n❌ 宝宝终身携带乙肝\n❌ 家庭关系无法修复\n\n宝宝的健康经不起你的逃避。勇敢面对，是唯一正确的选择。',
            type: 'danger',
          },
          nextNodeId: 'mhb_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 结局：完美 ==========
    mhb_ending_perfect: {
      id: 'mhb_ending_perfect',
      stage: 'ending',
      sceneTitle: '🌟 坦诚守护，阖家安康',
      narrative:
        '宝宝出生后一切健康，乙肝筛查阴性。小雪因为有抗体保护，全程没有被感染。\n\n回望这段路：从主动做检查、到坦诚告知小雪、到一起面对治疗方案、到妻子接种疫苗……每一步你都选择了最难但最正确的路。\n\n小雪抱着宝宝对你说："你做了最勇敢的事——面对、坦诚、保护我们。我很骄傲你是我丈夫。"',
      isEnding: true,
      endingType: 'perfect',
      endingTitle: '坦诚守护，阖家安康',
      endingNarrative:
        '全程主动检测、坦诚告知、规范治疗、妻子接种疫苗、科学备孕。你深刻践行了"乙肝可防可控"理念，守护了妻子和孩子的健康，维护了家庭信任与和睦。',
      knowledge: {
        title: '完美结局的核心启示',
        content:
          '你的选择证明了：\n\n✅ 乙肝可防可控——规范治疗+疫苗保护=家庭安全\n✅ 男性筛查责任重大——你是家庭传播的关键节点\n✅ 坦诚是最好的守护——给妻子知情权和保护权\n✅ 疫苗是最有效的防护——保护率>95%\n\n🌟 记住：疾病不可怕，隐瞒和侥幸才是最大的敌人。坦诚+科学+责任，就是守护家庭的最强力量！',
        type: 'correct',
      },
    },

    // ========== 结局：普通 ==========
    mhb_ending_normal: {
      id: 'mhb_ending_normal',
      stage: 'ending',
      sceneTitle: '⚠️ 心存侥幸，暗藏隐患',
      narrative:
        '虽然最终选择了积极母婴阻断，但因为发现较晚，宝宝需要在出生后做更严格的防护和随访。\n\n小雪虽然选择了和你一起面对，但心里有了裂痕："我不是怪你生病，我难过的是你不信任我，不给我选择保护自己的机会。"\n\n好在母婴阻断的效果很好，宝宝的预后尚可。你们用行动弥补过去的错误，但信任的重建需要更长时间。',
      isEnding: true,
      endingType: 'normal',
      endingTitle: '心存侥幸，暗藏隐患',
      endingNarrative:
        '存在隐瞒和拖延，虽未造成最坏结果，但增加了治疗难度和情感伤害。及时补救仍可守护家庭，但信任的修复需要时间和行动。',
      knowledge: {
        title: '普通结局的警示',
        content:
          '你的经历提醒所有人：\n\n⚠️ 隐瞒增加一切风险——发现越晚，保护窗口越小\n⚠️ 信任需要勇气维护——早坦诚比晚坦白好一万倍\n⚠️ 但亡羊补牢犹未为晚——积极阻断仍可有效保护宝宝\n\n📌 补救建议：\n• 宝宝完成全部疫苗和随访\n• 小雪规范治疗和复查\n• 你自己也坚持规范治疗\n• 用持续的行动重建信任\n\n每一个现在开始做正确选择的时刻，都是对家庭最好的守护。',
        type: 'warning',
      },
    },

    // ========== 结局：遗憾 ==========
    mhb_ending_regret: {
      id: 'mhb_ending_regret',
      stage: 'ending',
      sceneTitle: '💔 隐瞒致险，家庭受损',
      narrative:
        '持续隐瞒和逃避的恶果终于爆发——\n\n小雪和宝宝都被确诊乙肝阳性。因为错过母婴阻断时机，宝宝大概率终身携带乙肝病毒。\n\n当小雪得知你早已知道自己携带乙肝却选择隐瞒时，她的眼神从震惊变成绝望。\n\n"你连让我保护自己的机会都没给我。"小雪抱着需要长期随访的宝宝，泪水无声滑落。\n\n这一切本可以不同……',
      isEnding: true,
      endingType: 'regret',
      endingTitle: '隐瞒致险，家庭受损',
      endingNarrative:
        '高危后逃避检查、刻意隐瞒、拒绝筛查，导致妻子感染、新生儿乙肝、婚恋信任崩塌。这一切的根源，不是疾病本身，而是隐瞒与侥幸。',
      knowledge: {
        title: '遗憾结局的核心反思',
        content:
          '这个结局最大的悲剧在于——它是完全可避免的：\n\n🟢 如果主动检测 → 早发现，规范治疗\n🟢 如果坦诚告知 → 妻子接种疫苗，完全可避免感染\n🟢 如果参加婚检 → 提前发现，科学备孕\n🟢 如果妻子接种疫苗 → 保护率>95%，母婴传播链被切断\n\n💡 正向科普——永远不晚：\n• 乙肝可防可控——疫苗是最有效的防护\n• 梅毒可完全治愈——早期青霉素治疗效果极佳\n• 艾滋病可正常婚育——U=U（检测不到=不传染）\n• 母婴阻断成功率>95%——前提是积极配合\n• 补救方案：立即就医、规范治疗、伴侣筛查、家庭沟通\n\n记住：疾病不是悲剧，隐瞒和侥幸才是。选择坦诚和科学，永远不晚。',
        type: 'danger',
      },
    },
  },
};
