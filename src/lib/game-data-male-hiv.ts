// 男性视角 - 艾滋病剧情数据
import type { PerspectiveData, DiseaseType } from './game-types';

const disease: DiseaseType = 'hiv';

export const maleHivData: PerspectiveData = {
  perspective: 'male',
  title: '男性育龄视角 · 艾滋病',
  subtitle: '责任与担当',
  description: '你是一位育龄男性，高危接触后感染了艾滋病。作为家庭的守护者，你的每一个选择都将影响伴侣和下一代的健康。男性无症状携带HIV最危险——自己不知道，却能传给最亲的人。',
  protagonistName: '小军',
  protagonistAge: 31,
  protagonistStatus: '已婚，与妻子小雅结婚1年，计划要孩子',
  diseaseAssigned: disease,
  startNodeId: 'mh_intro',
  nodes: {
    // ========== 开篇介绍 ==========
    mh_intro: {
      id: 'mh_intro',
      stage: 'intro',
      sceneTitle: '故事开始',
      narrative:
        '你叫小军，31岁，在一家互联网公司做项目经理。和妻子小雅结婚一年，感情很好，双方父母都在催要孩子。\n\n上个月公司团建，你们去了外地。那天晚上喝了很多酒，同事带你去了KTV……你做了清醒后无比后悔的事。',
      nextNodeId: 'mh_high_risk',
    },

    // ========== 高危场景 ==========
    mh_high_risk: {
      id: 'mh_high_risk',
      stage: 'high_risk',
      sceneTitle: '出差那晚',
      narrative:
        '公司团建的最后一晚，喝得烂醉。在同事的怂恿下，你和一个KTV的服务生发生了无保护性行为。\n\n第二天醒来，头痛欲裂，昨晚的记忆碎片让你一阵恶心。回到酒店房间，你对着镜子里的自己说——"就这一次，不会那么倒霉的。"\n\n但你的心里有一个声音在说：你确定吗？',
      choices: [
        {
          id: 'mh_hr_1',
          text: '就这一次，应该没事。赶紧回家，当什么都没发生',
          isCorrect: false,
          knowledge: {
            title: '男性高危后的最大误区——"我是男的，不容易感染"',
            content:
              '男性同样面临HIV感染风险：\n\n• 男性无保护性行为感染HIV的概率约0.04%-1.7%（取决于性行为方式）\n• 虽然单次概率低于女性，但绝非零风险\n• "就这一次"的侥幸，可能让你错过72小时阻断黄金期\n• 男性感染后更难被发现——潜伏期可能长达8-10年，完全无症状\n\n⚠️ 最可怕的不是感染，而是"我不知道自己感染了"——然后在不知情中传给妻子、影响下一代。\n\n72小时内阻断药仍可生效，请立即行动！',
            type: 'danger',
          },
          nextNodeId: 'mh_post_ignore',
          tags: ['ignored_exposure'],
        },
        {
          id: 'mh_hr_2',
          text: '不管概率多低，我必须尽快查阻断药信息，回去就去疾控中心',
          isCorrect: true,
          knowledge: {
            title: '男性也需要72小时阻断——PEP不分性别',
            content:
              'HIV暴露后预防（PEP）对男性同样有效：\n\n🟢 72小时内服用阻断药：\n• 越早越好，2小时内效果最佳\n• 28天完整疗程\n• 阻断成功率：2小时内约99%\n\n🟢 男性高危后需特别注意：\n• 尽快到当地疾控中心或感染科\n• 评估暴露风险等级\n• 尽早开始阻断药\n• 暂停与妻子的无保护性行为\n• 2-6周后做四代HIV检测\n\n💡 作为丈夫，保护自己就是保护妻子和未来的孩子。这是男性的责任。',
            type: 'correct',
          },
          nextNodeId: 'mh_post_active',
          tags: ['active_response'],
        },
      ],
    },

    // ========== 高危后 - 忽略 ==========
    mh_post_ignore: {
      id: 'mh_post_ignore',
      stage: 'post_exposure',
      sceneTitle: '假装什么都没发生',
      narrative:
        '你把那晚的记忆压到脑后，回到了正常生活。小雅笑着迎接你回家，你抱紧她，心里五味杂陈。\n\n日子照常过。两周后你有点低烧和嗓子疼，以为是出差太累感冒了，吃了几片感冒药就过去了。\n\n你不知道，那可能正是HIV急性感染期的信号。而你的"没事"心态，正在把最亲的人推向危险……',
      knowledge: {
        title: '男性HIV急性期——最容易被忽视',
        content:
          '男性HIV急性期症状同样容易被忽略：\n\n• 发热、咽喉痛（类似感冒）\n• 淋巴结肿大\n• 肌肉酸痛、疲劳\n• 皮疹\n\n⚠️ 症状1-2周后自行消失，很多人认为"只是感冒"\n⚠️ 男性更倾向于"扛一扛就过去了"，不会主动就医\n⚠️ 急性期病毒载量最高，传染性最强\n\n数据警示：男性HIV感染者中，超过50%是在出现严重并发症后才被发现的——因为"男人不会轻易看病"。',
        type: 'warning',
      },
      nextNodeId: 'mh_premarital_skip',
    },

    // ========== 高危后 - 主动应对 ==========
    mh_post_active: {
      id: 'mh_post_active',
      stage: 'post_exposure',
      sceneTitle: '抓住黄金时间',
      narrative:
        '回到家的第二天，你请了半天假，去了市疾控中心。\n\n医生评估了你的暴露风险，开了HIV阻断药（PEP）。28天的药，每天按时吃，不能漏服。\n\n你把药藏在了公司的抽屉里——没敢告诉小雅。但至少，你在做正确的事。\n\n"阻断药不是100%保险，"医生说，"6周后需要检测确认。"',
      knowledge: {
        title: '男性PEP服用注意事项',
        content:
          '男性服用PEP同样需要严格遵守：\n\n💊 用药原则：\n• 72小时内开始，越早越好\n• 连续服药28天，不可漏服\n• 三联抗病毒药物方案\n\n💊 服药期间：\n• 避免饮酒\n• 可能出现恶心、头晕等副作用\n• 与妻子使用安全套（必须！）\n• 暂停备孕计划\n\n💊 完成后：\n• 4-6周做四代HIV检测\n• 12周后复查确认\n\n💡 男性服药依从性普遍低于女性——请一定要坚持完整疗程！28天的坚持，换来的是一家人的安心。',
        type: 'correct',
      },
      choices: [
        {
          id: 'mh_pea_1',
          text: '坚持28天完整服药，6周后按时检测',
          isCorrect: true,
          knowledge: {
            title: '坚持就是最好的保护',
            content:
              'PEP阻断成功的关键是依从性：\n\n✅ 每天按时服药\n✅ 28天完整疗程\n✅ 服药结束后4-6周做四代检测\n✅ 12周后复查确认\n✅ 服药期间及确认前坚持使用安全套\n\n作为丈夫和未来的父亲，你的坚持是全家的保护伞。',
            type: 'correct',
          },
          nextNodeId: 'mh_test_positive',
          tags: ['tested', 'active_treatment'],
        },
        {
          id: 'mh_pea_2',
          text: '吃了一周感觉副作用太大，偷偷停了',
          isCorrect: false,
          knowledge: {
            title: '男性中途停药更常见——但也更危险',
            content:
              '数据表明，男性PEP中途停药率高于女性：\n\n❌ 原因多为"副作用受不了"或"觉得应该没事了"\n❌ 中途停药=阻断失败=白吃药\n❌ 你可能失去唯一一次阻断机会\n\n💡 如果副作用严重：\n• 咨询医生调整方案，而不是自行停药\n• 副作用通常1-2周后减轻\n• 28天的坚持，换的是一生的安心\n\n作为男人，扛住28天比后悔一辈子容易得多。',
            type: 'danger',
          },
          nextNodeId: 'mh_test_positive_stop',
          tags: ['tested', 'skipped_followup'],
        },
      ],
    },

    // ========== 检测结果 - 阳性（完整服药路径）==========
    mh_test_positive: {
      id: 'mh_test_positive',
      stage: 'test_result',
      sceneTitle: '检测结果',
      narrative:
        '6周后，你做了检测。\n\nHIV抗体阳性。\n\n你的世界仿佛塌了。明明吃了阻断药……\n\n医生说："阻断药成功率很高但不是100%，可能服药时间不够早。但请你听好——HIV感染不等于死刑。规范抗病毒治疗后，你可以正常生活、正常工作、正常婚育。"\n\n你唯一想的是——小雅怎么办？',
      knowledge: {
        title: '男性HIV阳性——作为丈夫的责任',
        content:
          '男性确诊HIV后的核心责任：\n\n⚖️ 法律义务：\n• 《艾滋病防治条例》第38条：应将感染事实告知性伴侣\n• 故意隐瞒导致伴侣感染，可能承担刑事责任\n\n🏥 医学事实：\n• 规范抗病毒治疗→病毒载量检测不到→U=U→不会传染\n• 可以安全婚育，母婴阻断成功率>98%\n• 预期寿命与常人无异\n\n💑 情感责任：\n• 坦诚告知是对妻子最基本的尊重\n• 给小雅保护自己的机会\n• 一起面对比一个人扛更有力量\n\n"作为男人，最勇敢的事不是扛住不说，而是让最亲的人有机会和你一起面对。"',
        type: 'info',
      },
      choices: [
        {
          id: 'mh_tp_1',
          text: '必须告诉小雅，不管结果如何',
          isCorrect: true,
          knowledge: {
            title: '坦诚告知——男人最勇敢的选择',
            content:
              '向妻子坦白HIV感染是最艰难但最重要的决定：\n\n✅ 法律要求：必须告知性伴侣\n✅ 小雅需要立即做HIV检测\n✅ 小雅需要知道自己的健康风险\n✅ 你们可以一起制定安全婚育方案\n✅ U=U后可安全亲密接触\n\n"真正的担当不是独自承受，而是让对方有机会选择。"',
            type: 'correct',
          },
          nextNodeId: 'mh_tell_honest',
          tags: ['tested', 'honest'],
        },
        {
          id: 'mh_tp_2',
          text: '不能告诉小雅……她会崩溃的。我自己吃药控制就行',
          isCorrect: false,
          knowledge: {
            title: '男性隐瞒HIV——最自私也最危险的选择',
            content:
              '男性隐瞒HIV的特殊危害：\n\n❌ 男性无症状携带期长——你以为自己"还好"，但每次亲密接触都在暴露妻子\n❌ 小雅在不知情中持续暴露，感染概率日积月累\n❌ 如果小雅怀孕——母婴传播风险25%-45%\n❌ 隐瞒=剥夺小雅的知情权和保护权\n\n⚠️ 法律后果：\n• 故意传播HIV可追究刑事责任\n• 婚姻中隐瞒重大疾病可被撤销\n• 如果小雅因此感染，你可能面临法律追诉\n\n💡 你以为在保护她，其实你在伤害她——而她连保护自己的机会都没有。',
            type: 'danger',
          },
          nextNodeId: 'mh_tell_hide',
          tags: ['tested', 'hidden'],
        },
      ],
    },

    // ========== 检测结果 - 阳性（中途停药路径）==========
    mh_test_positive_stop: {
      id: 'mh_test_positive_stop',
      stage: 'test_result',
      sceneTitle: '悔之晚矣',
      narrative:
        '你中途停了阻断药，6周后的检测——HIV阳性。\n\n医生很遗憾："完整服药28天成功率很高。中途停药，等于浪费了黄金阻断机会。"\n\n后悔已经来不及了。现在必须面对——HIV阳性，需要尽快开始抗病毒治疗。',
      knowledge: {
        title: '确诊后立即开始抗病毒治疗',
        content:
          '男性确诊HIV后的治疗要点：\n\n💊 立即开始规范抗病毒治疗（ART）\n💊 国家免费提供抗病毒药物\n💊 每天服药一次，需终身坚持\n💊 3-6个月内病毒载量可降至检测不到\n💊 定期复查病毒载量和CD4细胞\n\n"早治疗=早控制=早恢复。后悔没用，行动才有用。"',
        type: 'info',
      },
      nextNodeId: 'mh_premarital_skip_tested',
    },

    // ========== 告知伴侣 - 坦诚 ==========
    mh_tell_honest: {
      id: 'mh_tell_honest',
      stage: 'tell_partner',
      sceneTitle: '最难的一次坦白',
      narrative:
        '你和小雅坐在客厅里。电视开着，但你已经听不到任何声音。\n\n"小雅，我有件事必须告诉你……"你深吸一口气，"我查出了HIV阳性。是出差那晚，我做了一件蠢事……"\n\n小雅的表情从困惑到震惊，眼泪夺眶而出。\n\n沉默了很久，小雅擦干眼泪说："我先去做检测。"\n\n第二天，小雅的检测结果——阴性。因为你在那之后开始服药，采取了安全措施，她被感染的风险很低。',
      knowledge: {
        title: 'U=U——男性HIV感染者的婚育保障',
        content:
          '男性HIV感染者的U=U标准与婚育指导：\n\n🔬 男性同样适用U=U：\n• 规范抗病毒治疗6个月以上\n• 病毒载量持续检测不到\n• 不会通过性行为传染给妻子\n\n👨‍👩‍👦 安全备孕方案：\n• 在达到U=U后，可在医生指导下自然受孕\n• 妻子可选择使用PrEP进一步降低风险\n• 妻子孕期做好规范产检\n• 传播风险极低\n\n💡 "坦诚告知+规范治疗+科学防护"= 丈夫最负责任的表现。',
        type: 'correct',
      },
      nextNodeId: 'mh_premarital_honest',
    },

    // ========== 告知伴侣 - 隐瞒 ==========
    mh_tell_hide: {
      id: 'mh_tell_hide',
      stage: 'tell_partner',
      sceneTitle: '独自扛着',
      narrative:
        '你选择隐瞒。每天偷偷吃药，对小雅谎称是加班吃的营养品。\n\n你们的亲密关系还在继续——但你心里每时每刻都在害怕。你知道自己应该告诉她，但你更害怕她离开。\n\n"最近怎么总是心不在焉？"小雅问。\n"工作压力大，别担心。"你勉强笑了笑。\n\n你不知道，每一次亲密接触，你都在拿小雅的健康冒险。而她，一无所知。',
      knowledge: {
        title: '男性无症状携带=最隐蔽的传播源',
        content:
          '男性HIV感染的特殊危险——无症状携带：\n\n⚠️ 男性潜伏期可长达8-10年\n⚠️ 期间完全无症状，但持续有传染性\n⚠️ 未治疗状态下，每次无保护性行为都可能传给妻子\n⚠️ 妻子怀孕后，母婴传播风险25%-45%\n\n💡 数据：\n• 男性HIV感染者中，超过40%是在伴侣被感染后才被发现\n• "我不知道自己有"不能成为免责理由\n• 你有法律义务告知伴侣\n\n"不是你觉得没事就没事。她的健康，你无权替她决定。"',
        type: 'danger',
      },
      nextNodeId: 'mh_premarital_hide',
    },

    // ========== 婚前检查 - 坦诚路径 ==========
    mh_premarital_honest: {
      id: 'mh_premarital_honest',
      stage: 'premarital',
      sceneTitle: '婚检中的科学指导',
      narrative:
        '你们一起做了婚检。因为已知你的情况，医生给出了专业指导：\n\n1. 你继续规范抗病毒治疗，目标是尽快达到U=U\n2. 小雅做HIV检测确认阴性，可选择使用PrEP\n3. 在你达到U=U后，可安全亲密接触\n4. 备孕需在医生指导下进行\n\n医生看着你们说："你们做了最难但最正确的选择。坦诚+科学，HIV感染者的家庭一样可以幸福。"',
      knowledge: {
        title: 'HIV男性——守护家庭的核心知识',
        content:
          'HIV阳性男性守护家庭的科学方案：\n\n🛡️ 保护妻子：\n• 规范治疗达到U=U\n• 妻子定期做HIV检测\n• 妻子可使用PrEP预防\n\n🛡️ 保护宝宝：\n• 确保你达到U=U标准后再备孕\n• 妻子孕期规范产检\n• 新生儿无需特殊干预（父亲HIV阳性不影响新生儿，关键是母亲不被感染）\n\n🛡️ 家庭日常：\n• 不共用牙刷、剃须刀等可能沾血的物品\n• 日常接触不会传播（吃饭、拥抱、握手）\n• 规范治疗=不会通过性行为传播\n\n💡 父亲HIV阳性但母亲阴性，宝宝自然不会感染HIV。所以关键是保护妻子不被感染！',
        type: 'correct',
      },
      nextNodeId: 'mh_prepregnancy_honest',
    },

    // ========== 婚前检查 - 隐瞒路径 ==========
    mh_premarital_hide: {
      id: 'mh_premarital_hide',
      stage: 'premarital',
      sceneTitle: '逃避婚检',
      narrative:
        '双方父母催着做婚检。你心里一慌——婚检必查艾梅乙。\n\n"我最近体检过，没问题。就别折腾了。"你故作轻松。\n\n小雅有些犹豫，但最终被你说服了。你们跳过了婚检。\n\n你觉得逃过一劫——但实际上，你关闭了最重要的发现窗口。',
      choices: [
        {
          id: 'mh_pm_hd_1',
          text: '反正都结婚了，直接开始备孕吧',
          isCorrect: false,
          knowledge: {
            title: 'HIV+隐瞒+无指导备孕——家庭灾难的开端',
            content:
              '男性HIV阳性未告知+无医学指导+直接备孕：\n\n❌ 小雅持续暴露——每次无保护接触都可能被感染\n❌ 如果小雅被感染→母婴传播风险25%-45%\n❌ 真相迟早暴露——孕期产检必查艾梅乙\n❌ 隐瞒时间越长，后果越严重\n\n而如果你提前告知+规范治疗达到U=U，这一切风险都可以消除！',
            type: 'danger',
          },
          nextNodeId: 'mh_prepregnancy_hide',
          tags: ['hidden', 'skipped_check', 'direct_pregnancy'],
        },
        {
          id: 'mh_pm_hd_2',
          text: '虽然跳过了婚检，但备孕前我去做个检查',
          isCorrect: true,
          knowledge: {
            title: '孕前检查是最后的机会',
            content:
              '跳过婚检可惜，但孕前检查是另一个关键窗口：\n\n✅ 可以评估你的病毒载量和治疗效果\n✅ 可以让小雅做检测\n✅ 可以获得科学备孕指导\n✅ 至少还有机会做正确的事\n\n"重要的不是之前错过了什么，而是现在开始做正确的事。"',
            type: 'info',
          },
          nextNodeId: 'mh_prepregnancy_late_check',
          tags: ['hidden', 'late_check'],
        },
      ],
    },

    // ========== 婚前检查 - 未检测路径 ==========
    mh_premarital_skip: {
      id: 'mh_premarital_skip',
      stage: 'premarital',
      sceneTitle: '婚检提议',
      narrative:
        '婚后双方父母催做婚检。小雅说："去做个检查吧，对咱们都好。"\n\n你心里一阵紧张——那晚之后你一直没去检查……',
      choices: [
        {
          id: 'mh_pm_s_1',
          text: '去做婚检，正好查一下',
          isCorrect: true,
          knowledge: {
            title: '婚检是发现HIV的关键关口',
            content:
              '男性HIV感染更依赖主动筛查：\n\n• 男性潜伏期更长，无症状期更久\n• "感觉健康"完全不能排除感染\n• 婚检是主动发现的唯一机会\n• 早发现=早治疗=保护妻子\n\n主动筛查是负责任男人的标配！',
            type: 'correct',
          },
          nextNodeId: 'mh_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'mh_pm_s_2',
          text: '我身体好着呢，不用查',
          isCorrect: false,
          knowledge: {
            title: '男性最大的误区——"我没事"',
            content:
              '男性"感觉健康"不等于没有感染：\n\n• HIV潜伏期8-10年，期间完全无症状\n• 男性更不愿主动就医，导致发现更晚\n• 你感觉没事，但病毒在持续破坏免疫系统\n• 每一次和妻子的亲密接触，都是暴露\n\n数据显示：男性HIV感染者中，60%以上是通过婚检或伴侣检测才发现的。拒绝筛查=拒绝保护家人。',
            type: 'danger',
          },
          nextNodeId: 'mh_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚前检查 - 已确诊未告知路径 ==========
    mh_premarital_skip_tested: {
      id: 'mh_premarital_skip_tested',
      stage: 'premarital',
      sceneTitle: '婚检关口',
      narrative:
        '你确诊了HIV但没告诉小雅。婚检提议来了——你知道婚检会查出来……',
      choices: [
        {
          id: 'mh_pm_st_1',
          text: '去做婚检，面对现实',
          isCorrect: true,
          knowledge: {
            title: '婚检帮你打开困局',
            content:
              '婚检可以帮你：\n• 正式确诊和评估\n• 让小雅做检测\n• 获得专业婚育指导\n• 打开坦诚沟通的契机\n\n逃避解决不了问题，只会让问题更严重。',
            type: 'correct',
          },
          nextNodeId: 'mh_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'mh_pm_st_2',
          text: '不想去，怕被查出来',
          isCorrect: false,
          knowledge: {
            title: '逃避婚检=拿全家健康冒险',
            content:
              '跳过婚检意味着：\n• 小雅继续在不知情中暴露\n• 你无法获得婚育指导\n• 孕期产检也会查出来\n• 问题不会因逃避而消失\n\n每一次拒绝检查，都是在拿全家的健康冒险。',
            type: 'warning',
          },
          nextNodeId: 'mh_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚检发现感染 ==========
    mh_premarital_check_discover: {
      id: 'mh_premarital_check_discover',
      stage: 'premarital',
      sceneTitle: '婚检意外发现',
      narrative:
        '婚检结果出来——你的HIV抗体阳性。\n\n小雅就坐在你旁边。她看着你的报告，然后看着你。',
      choices: [
        {
          id: 'mh_pm_cd_1',
          text: '"小雅，对不起。我有件事必须坦白……"',
          isCorrect: true,
          knowledge: {
            title: '迟来的坦诚仍需勇气',
            content:
              '虽然真相来得晚了，但坦诚仍是最正确的选择：\n\n✅ 小雅需要立即做HIV检测\n✅ 如果未感染，可以保护自己\n✅ 你可以开始规范治疗\n✅ 坦诚后才能获得完整的家庭支持\n\n"认错不容易，但比继续隐瞒好一万倍。"',
            type: 'correct',
          },
          nextNodeId: 'mh_prepregnancy_honest_late',
          tags: ['tested_late', 'honest_late'],
        },
        {
          id: 'mh_pm_cd_2',
          text: '"我也不知道怎么感染的……可能以前的事吧"',
          isCorrect: false,
          knowledge: {
            title: '模糊化=继续隐瞒=继续伤害',
            content:
              '含糊其辞的危害：\n❌ 小雅不知道你的暴露风险\n❌ 无法判断自己是否需要紧急检测\n❌ 隐瞒高危细节=隐瞒传播风险\n\n完整真相=完整防护。模糊处理只会延续伤害。',
            type: 'danger',
          },
          nextNodeId: 'mh_prepregnancy_half_hide',
          tags: ['tested_late', 'half_hidden'],
        },
      ],
    },

    // ========== 完全跳过婚检 ==========
    mh_premarital_skip_all: {
      id: 'mh_premarital_skip_all',
      stage: 'premarital',
      sceneTitle: '跳过婚检',
      narrative:
        '你们跳过了婚检。双方父母虽然有些不满，但也没再坚持。\n\n很快你们开始备孕，两个月后小雅怀孕了。\n\n你不知道HIV正在你体内悄悄运作，而你每一次"没事"的自我安慰，都让小雅和宝宝多一分危险……',
      knowledge: {
        title: '跳过婚检=放弃主动权',
        content:
          '男性跳过婚检的后果更为严重：\n\n• 男性是家庭传播的源头——不知情的携带者\n• 跳过婚检→不知道自己感染→继续暴露妻子\n• 妻子感染→母婴传播风险飙升\n• 主动筛查是男性保护家庭的第一责任',
        type: 'warning',
      },
      nextNodeId: 'mh_prenatal_skip_all',
    },

    // ========== 孕前检查 - 坦诚路径 ==========
    mh_prepregnancy_honest: {
      id: 'mh_prepregnancy_honest',
      stage: 'prepregnancy',
      sceneTitle: '科学备孕',
      narrative:
        '经过8个月的规范抗病毒治疗，你的病毒载量持续检测不到——达到U=U标准！\n\n医生说："你的治疗效果很好。在U=U状态下，通过自然受孕传给小雅的风险极低。小雅可以选择使用PrEP进一步降低风险。"\n\n小雅握着你的手："我们一起。"\n\n两个月后，小雅怀孕了！',
      knowledge: {
        title: '父亲HIV阳性，母亲阴性——宝宝安全吗？',
        content:
          '关键科普：父亲HIV阳性但母亲阴性时：\n\n✅ 宝宝不会直接感染HIV——HIV不会通过精子遗传\n✅ 关键是确保母亲不被感染\n✅ 父亲达到U=U后，不会通过性行为传染给母亲\n✅ 母亲不感染，宝宝自然安全\n\n⚠️ 但如果隐瞒不治：\n• 母亲可能被感染\n• 母亲感染后母婴传播率25%-45%\n• 宝宝可能终身携带HIV\n\n💡 保护母亲=保护宝宝。而保护母亲的前提，是你要坦诚告知和规范治疗！',
        type: 'correct',
      },
      nextNodeId: 'mh_prenatal_honest',
    },

    // ========== 孕前检查 - 坦诚（晚发现路径）==========
    mh_prepregnancy_honest_late: {
      id: 'mh_prepregnancy_honest_late',
      stage: 'prepregnancy',
      sceneTitle: '重建信任',
      narrative:
        '虽然真相来得晚了，但你选择了坦诚。小雅去做HIV检测——结果阴性。\n\n小雅哭了很久，最后说："我需要时间。但你最终告诉了我，这很重要。"\n\n你开始规范抗病毒治疗，医生说6-8个月后有望达到U=U标准。你们约定，等治疗达标后再考虑要孩子。\n\n信任的修复需要时间，但至少你们在同一个方向上努力。',
      knowledge: {
        title: '晚发现不晚治疗',
        content:
          '男性即使发现较晚，开始治疗仍可有效控制：\n\n✅ 3-6个月病毒载量可降至检测不到\n✅ CD4细胞逐渐恢复\n✅ 达到U=U后可安全婚育\n✅ 预期寿命与常人无异\n\n"晚一步"总好过"不迈步"。',
        type: 'correct',
      },
      nextNodeId: 'mh_prenatal_honest',
    },

    // ========== 孕前检查 - 半隐瞒路径 ==========
    mh_prepregnancy_half_hide: {
      id: 'mh_prepregnancy_half_hide',
      stage: 'prepregnancy',
      sceneTitle: '模糊的真相',
      narrative:
        '你没有完全坦白高危接触的事。小雅半信半疑，但没有深究。\n\n你开始治疗，但小雅一直没去做检测。你们很快开始备孕——你觉得"吃药了应该没事了吧"。\n\n两个月后，小雅怀孕了。',
      knowledge: {
        title: '不完整的真相=不完整的防护',
        content:
          '半隐瞒导致半防护：\n\n⚠️ 小雅没做HIV检测——不知道自己是否被感染\n⚠️ 小雅没有使用PrEP——持续暴露\n⚠️ 你未达到U=U就备孕——仍有传染风险\n⚠️ 不完整沟通=防护链条有漏洞\n\n完整真相=完整防护。',
        type: 'warning',
      },
      nextNodeId: 'mh_prenatal_half_hide',
    },

    // ========== 孕前检查 - 隐瞒路径 ==========
    mh_prepregnancy_hide: {
      id: 'mh_prepregnancy_hide',
      stage: 'prepregnancy',
      sceneTitle: '隐瞒下的备孕',
      narrative:
        '你隐瞒了HIV感染，和小雅开始备孕。没有医生指导，不知道病毒载量，小雅也不知道需要保护自己。\n\n你每天偷偷吃药，心里侥幸着："药吃了应该没事了吧……"\n\n两个月后，小雅怀孕了。你既高兴又害怕。',
      knowledge: {
        title: '男性隐瞒HIV备孕——拿妻子和宝宝冒险',
        content:
          '男性HIV阳性未告知+直接备孕的极端风险：\n\n❌ 病毒载量未知→传染风险未知\n❌ 小雅每次无保护接触都是暴露\n❌ 如果小雅感染→母婴传播率25%-45%\n❌ 宝宝可能终身携带HIV\n\n而规范治疗达到U=U后，这一切风险都可以消除！差距如此巨大，全在于"是否坦诚+是否科学干预"。',
        type: 'danger',
      },
      nextNodeId: 'mh_prenatal_hide',
    },

    // ========== 孕前检查 - 补查路径 ==========
    mh_prepregnancy_late_check: {
      id: 'mh_prepregnancy_late_check',
      stage: 'prepregnancy',
      sceneTitle: '孕前补查',
      narrative:
        '虽然跳过了婚检，但你决定去做孕前检查。结果显示HIV阳性。\n\n这一次，你没有再犹豫。你告诉了小雅真相——关于那晚的高危接触，关于你一直以来的隐瞒。\n\n小雅沉默了很久，最后说："我难过的是你不信任我。不过至少你现在说了。"',
      choices: [
        {
          id: 'mh_ppg_lc_1',
          text: '和小雅一起去看医生，制定治疗方案和备孕计划',
          isCorrect: true,
          knowledge: {
            title: '坦诚之后，科学跟上',
            content:
              '孕前发现HIV后的科学应对：\n\n1️⃣ 立即开始规范抗病毒治疗\n2️⃣ 小雅做HIV检测+必要时使用PrEP\n3️⃣ 等病毒载量达标后再备孕\n4️⃣ 孕期做好产检\n\n虽然隐瞒让人遗憾，但最终选择坦诚和科学，仍然可以守护家庭！',
            type: 'correct',
          },
          nextNodeId: 'mh_prenatal_honest',
          tags: ['honest_late', 'late_check'],
        },
        {
          id: 'mh_ppg_lc_2',
          text: '我自己治疗就行，小雅不用去检测吧',
          isCorrect: false,
          knowledge: {
            title: '伴侣必须同步检测！',
            content:
              'HIV只治自己不查伴侣，是最危险的侥幸心理：\n\n⚠️ 小雅可能已被感染——不检测就不知道\n⚠️ 如果小雅也感染了却不治疗，病情会持续恶化\n⚠️ 小雅若未感染，可使用PrEP（暴露前预防）保护自己\n⚠️ 隐瞒检测结果违法——HIV感染者有告知义务\n\n💡 伴侣检测不是"连累对方"，而是保护对方。早检测=早安心=早防护。不让伴侣检测，不是在保护她，而是在害她。',
            type: 'warning',
          },
          nextNodeId: 'mh_prenatal_honest_no_partner_check',
          tags: ['honest_late', 'no_partner_check'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚但伴侣未查 ==========
    mh_prenatal_honest_no_partner_check: {
      id: 'mh_prenatal_honest_no_partner_check',
      stage: 'prenatal',
      sceneTitle: '伴侣感染发现',
      narrative:
        '你按照医嘱规范治疗，病毒载量已检测不到。但在孕24周时，小雅因为持续低烧和皮疹去医院检查——HIV阳性。\n\n医生说："如果当初让小雅也做了检测，完全可以更早发现。现在她孕期感染，母婴传播风险显著增加。"',
      choices: [
        {
          id: 'mh_pn_hnpc_1',
          text: '立即让小雅开始抗病毒治疗，启动母婴阻断方案',
          isCorrect: true,
          knowledge: {
            title: '孕期发现HIV仍然可以阻断',
            content:
              '即使孕期才发现HIV，只要立即开始治疗，母婴阻断仍有效：\n\n✅ 小雅立即启动抗病毒治疗\n✅ 孕晚期加强监测病毒载量\n✅ 选择合适的分娩方式\n✅ 新生儿出生后预防性用药4-6周\n✅ 配方奶喂养\n\n💡 即使晚了一步，科学干预仍然可以大幅降低母婴传播风险。关键是不再犹豫。',
            type: 'correct',
          },
          nextNodeId: 'mh_prenatal_honest',
          tags: ['honest', 'partner_treated'],
        },
        {
          id: 'mh_pn_hnpc_2',
          text: '先不管小雅了，保住我的治疗就行',
          isCorrect: false,
          knowledge: {
            title: '忽视伴侣=忽视家庭安全',
            content:
              'HIV不是一个人的事，是整个家庭的事：\n\n❌ 小雅不治疗=病情持续恶化=严重健康风险\n❌ 孕期HIV不干预=母婴传播率25%-45%\n❌ 孩子出生后，未治疗的母亲也是风险源\n\n💡 家庭是一个整体，只做"一半防护"等于没做。夫妻同查同治，才能真正守护全家。',
            type: 'warning',
          },
          nextNodeId: 'mh_prenatal_hide',
          tags: ['hidden', 'partner_ignored'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚路径 ==========
    mh_prenatal_honest: {
      id: 'mh_prenatal_honest',
      stage: 'prenatal',
      sceneTitle: '守护新生命',
      narrative:
        '孕期的每一天，你都严格遵守医嘱：按时服药、定期复查、监测病毒载量。\n\n好消息是——你的治疗效果非常好，病毒载量一直保持在检测不到的水平。小雅的HIV检测也一直是阴性。\n\n"小雅和宝宝都很安全。"医生说，"你做到了最重要的事——坦诚告知、规范治疗。这是保护全家的最佳方案。"\n\n终于到了预产期。小雅顺利生下了一个健康的宝宝——6斤3两，哭声响亮。',
      knowledge: {
        title: '父亲HIV阳性——家庭的正确守护方式',
        content:
          '父亲HIV阳性、母亲阴性的家庭完整守护方案：\n\n🏥 你的责任：\n• 坚持规范抗病毒治疗\n• 保持U=U状态\n• 不共用牙刷、剃须刀\n• 定期复查\n\n🏥 保护小雅：\n• U=U后不会通过性行为传播\n• 小雅可选择使用PrEP\n• 小雅定期做HIV检测\n\n🏥 保护宝宝：\n• 母亲不被感染，宝宝自然安全\n• 宝宝无需特殊干预\n• 正常母乳喂养（如果母亲阴性）\n\n✅ 坦诚+科学=最完整的家庭守护！',
        type: 'correct',
      },
      nextNodeId: 'mh_ending_perfect',
    },

    // ========== 孕期产检 - 半隐瞒路径 ==========
    mh_prenatal_half_hide: {
      id: 'mh_prenatal_half_hide',
      stage: 'prenatal',
      sceneTitle: '孕期的隐患',
      narrative:
        '小雅去做产检。艾梅乙筛查——小雅HIV阴性，但你之前没有告诉她全部真相……\n\n但医生注意到了一个问题："你先生的检测记录呢？他做过HIV检测吗？"\n\n小雅一脸茫然地看着你。',
      choices: [
        {
          id: 'mh_pn_hh_1',
          text: '坦白一切，全力配合医生',
          isCorrect: true,
          knowledge: {
            title: '孕期坦白仍可保护全家',
            content:
              '孕期坦诚后立即行动：\n✅ 你做病毒载量检测，评估传染风险\n✅ 小雅复测确认阴性\n✅ 开始/继续规范治疗\n✅ 用行动证明你的悔意\n\n虽然真相来得晚，但积极应对仍是对家庭最好的守护。',
            type: 'correct',
          },
          nextNodeId: 'mh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'mh_pn_hh_2',
          text: '继续搪塞，说之前查过了没问题',
          isCorrect: false,
          knowledge: {
            title: '孕期继续隐瞒=拿宝宝健康冒险',
            content:
              '孕期继续隐瞒的后果：\n❌ 小雅的"阴性"可能只是暂时的——持续暴露可能转为阳性\n❌ 如果孕期感染→宝宝面临母婴传播风险\n❌ 真相终将暴露，越晚越严重\n\n宝宝的健康经不起你的侥幸。',
            type: 'danger',
          },
          nextNodeId: 'mh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 隐瞒路径 ==========
    mh_prenatal_hide: {
      id: 'mh_prenatal_hide',
      stage: 'prenatal',
      sceneTitle: '纸包不住火',
      narrative:
        '小雅去做产检。艾梅乙筛查——HIV阳性。\n\n小雅被感染了。就因为你的隐瞒。\n\n她拿着报告，眼泪无声地滑落："你早就知道了，是不是？你为什么不告诉我？"\n\n你的沉默就是回答。医生面色凝重："母亲HIV阳性，母婴传播风险显著增加。我们需要立即启动母婴阻断方案。"',
      knowledge: {
        title: '男性隐瞒HIV导致妻子感染——最惨痛的代价',
        content:
          '男性隐瞒HIV导致妻子感染的真实悲剧：\n\n💔 小雅终身需要服药\n💔 宝宝面临HIV母婴传播风险\n💔 信任彻底崩塌\n💔 法律层面：明知感染而未告知配偶导致其感染，可追究法律责任\n\n💡 这一切只需一次坦诚就可以避免：\n• U=U后不会传染\n• 但前提是——你要告诉她，你要开始治疗\n• 坦诚+科学=零传播\n• 隐瞒+侥幸=必传播',
        type: 'danger',
      },
      choices: [
        {
          id: 'mh_pn_hd_1',
          text: '彻底认错，全力配合母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，全力以赴',
            content:
              '虽然后果已造成，但积极应对仍有希望：\n✅ 你和小雅都开始规范抗病毒治疗\n✅ 宝宝做好母婴阻断\n✅ 用行动证明你的悔意\n\n过去的错误无法撤销，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'mh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'mh_pn_hd_2',
          text: '无法面对，选择逃避',
          isCorrect: false,
          knowledge: {
            title: '逃避的最终代价',
            content:
              '孕期逃避意味着：\n❌ 宝宝可能感染HIV\n❌ 小雅治疗延误\n❌ 家庭无法维系\n\n勇敢面对是唯一正确的路。',
            type: 'danger',
          },
          nextNodeId: 'mh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 完全跳过检查路径 ==========
    mh_prenatal_skip_all: {
      id: 'mh_prenatal_skip_all',
      stage: 'prenatal',
      sceneTitle: '孕期真相',
      narrative:
        '小雅第一次产检，艾梅乙筛查——HIV阳性。\n\n小雅被感染了。你心里清楚这意味着什么——是你传给她的。\n\n医生面色凝重："你先生也需要立即检测。"',
      choices: [
        {
          id: 'mh_pn_sa_1',
          text: '坦白一切，全力配合母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '从现在开始做正确的事',
            content:
              '孕期发现虽晚，但积极治疗仍可降低风险：\n\n1️⃣ 你和小雅都开始抗病毒治疗\n2️⃣ 做好母婴阻断\n3️⃣ 新生儿预防性用药\n\n过去无法改变，现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'mh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'mh_pn_sa_2',
          text: '无法面对，想要逃避',
          isCorrect: false,
          knowledge: {
            title: '宝宝的健康经不起逃避',
            content:
              '孕期逃避的后果：\n❌ 宝宝感染HIV风险25%-45%\n❌ 小雅治疗延误\n❌ 你自己的病情恶化\n\n请为宝宝和小雅勇敢一次。',
            type: 'danger',
          },
          nextNodeId: 'mh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 结局：完美 ==========
    mh_ending_perfect: {
      id: 'mh_ending_perfect',
      stage: 'ending',
      sceneTitle: '🌟 坦诚守护，阖家安康',
      narrative:
        '宝宝出生了——6斤3两，完全健康！\n\n小雅的HIV检测一直是阴性，宝宝自然也不会感染。\n\n你抱着刚出生的孩子，眼泪止不住地流。这是你用坦诚和坚持换来的。\n\n回望这段路：高危后的恐惧、立刻去疾控中心的决断、确诊后的崩溃、向小雅坦白的勇气、8个月规范治疗的坚持……每一步你都选择了最难但最正确的路。\n\n小雅靠在你肩头说："谢谢你告诉了我。这是我们最好的决定。"',
      isEnding: true,
      endingType: 'perfect',
      endingTitle: '坦诚守护，阖家安康',
      endingNarrative:
        '全程主动检测、坦诚告知、规范治疗、科学防护。你深刻践行了"U=U"和"艾梅乙可防可治"理念，守护了妻子与孩子的健康，维护了家庭的信任与和睦。',
      knowledge: {
        title: '完美结局的核心启示',
        content:
          '你的选择证明了：\n\n✅ HIV可防可控——72小时阻断药、规范抗病毒治疗、U=U\n✅ 男性HIV感染者可以正常婚育——法律保障、医学成熟\n✅ 父亲HIV阳性但母亲阴性→宝宝天然安全\n✅ 坦诚是最好的守护——给伴侣知情权和保护权\n✅ U=U是科学事实——检测不到=不传染\n\n🌟 男性最重要的责任：主动筛查+坦诚告知+规范治疗=守护全家的最佳方案！\n\n记住：疾病不可怕，隐瞒和恐惧才是最大的敌人。坦诚+科学+坚持，就是守护家庭的最强力量！',
        type: 'correct',
      },
    },

    // ========== 结局：普通 ==========
    mh_ending_normal: {
      id: 'mh_ending_normal',
      stage: 'ending',
      sceneTitle: '⚠️ 心存侥幸，暗藏隐患',
      narrative:
        '虽然最终选择了积极治疗，但因为发现较晚、隐瞒时间较长，信任的修复需要很长时间。\n\n小雅开始了抗病毒治疗，宝宝也做了预防性用药。你们需要一起面对漫长的康复和随访之路。\n\n小雅说："我不怪你生病，我难过的是你没有第一时间相信我。但我会陪你走下去。"\n\n你暗暗发誓，从今以后再也不会隐瞒任何事。',
      isEnding: true,
      endingType: 'normal',
      endingTitle: '心存侥幸，暗藏隐患',
      endingNarrative:
        '存在隐瞒和拖延，虽最终积极补救，但增加了治疗难度和情感伤害。信任的修复需要时间和持续的行动。',
      knowledge: {
        title: '普通结局的警示',
        content:
          '你的经历提醒所有男性：\n\n⚠️ 隐瞒增加一切风险——发现越晚，干预空间越小\n⚠️ 信任需要勇气维护——早坦诚比晚坦白好一万倍\n⚠️ 但亡羊补牢犹未为晚——积极治疗仍可有效控制\n\n📌 补救建议：\n• 你和小雅坚持规范治疗\n• 宝宝完成全部随访\n• 用持续的行动重建信任\n\n每一个现在开始做正确选择的时刻，都是对家庭最好的守护。',
        type: 'warning',
      },
    },

    // ========== 结局：遗憾 ==========
    mh_ending_regret: {
      id: 'mh_ending_regret',
      stage: 'ending',
      sceneTitle: '💔 隐瞒致险，家庭受损',
      narrative:
        '持续隐瞒的恶果终于爆发——\n\n小雅被确诊HIV阳性。因为你的隐瞒，她从未保护过自己。\n\n宝宝出生后，母婴阻断启动较晚，需要在更长时间内密切监测。每一次等待检测结果的日子都是煎熬。\n\n当小雅得知你早已知情却选择隐瞒时，她什么也没说，只是默默收拾了行李。\n\n你看着空荡荡的家，终于明白——疾病不是最大的悲剧，隐瞒才是。',
      isEnding: true,
      endingType: 'regret',
      endingTitle: '隐瞒致险，家庭受损',
      endingNarrative:
        '高危后逃避检查、刻意隐瞒HIV感染，导致妻子被感染、宝宝面临HIV风险、婚恋信任彻底破裂。这一切的根源，不是疾病本身，而是隐瞒与侥幸。',
      knowledge: {
        title: '遗憾结局的核心反思——永远不晚的正向科普',
        content:
          '这个结局最大的悲剧在于——它是完全可避免的：\n\n🟢 如果高危后72小时内服用阻断药 → 可能完全阻断感染\n🟢 如果确诊后坦诚告知 → 妻子获得保护，不会感染\n🟢 如果参加婚检 → 提前发现，科学指导\n🟢 如果规范治疗达到U=U → 不会传染给任何人\n\n💡 正向科普——现在开始仍然有希望：\n• HIV可防可控——规范抗病毒治疗可长期稳定\n• U=U——检测不到=不传染，可正常生活婚育\n• 母婴阻断成功率>98%\n• 国家免费提供抗病毒药物和随访\n• 法律保障HIV感染者婚育权利\n\n记住：疾病不是悲剧，隐瞒和侥幸才是。选择坦诚和科学，永远不晚。',
        type: 'danger',
      },
    },
  },
};
