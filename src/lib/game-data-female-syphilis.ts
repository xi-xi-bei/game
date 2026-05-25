import type { PerspectiveData, DiseaseType } from './game-types';

const disease: DiseaseType = 'syphilis';

export const femaleSyphilisData: PerspectiveData = {
  perspective: 'female',
  title: '女性育龄视角 · 梅毒',
  subtitle: '夫妻同治，守护家庭',
  description: '你是一位育龄女性，高危接触后感染了梅毒。梅毒早期可100%治愈，但前提是你要检查、要告知、要夫妻同治。你的每一个选择，都关乎伴侣的健康和宝宝的未来。',
  protagonistName: '小琳',
  protagonistAge: 27,
  protagonistStatus: '未婚，与男友恋爱3年，近期计划结婚',
  diseaseAssigned: disease,
  startNodeId: 'fs_intro',
  nodes: {
    // ========== 开篇引入 ==========
    fs_intro: {
      id: 'fs_intro',
      stage: 'intro',
      sceneTitle: '小琳的故事',
      narrative:
        '你叫小琳，27岁，在一家互联网公司做运营。和男朋友阿杰恋爱三年，最近在谈婚论嫁。\n\n一切看起来都很顺利——直到那个改变一切的夜晚……',
      knowledge: {
        title: '梅毒——沉默的威胁',
        content:
          '梅毒是由梅毒螺旋体引起的性传播疾病：\n\n🔬 早期可完全治愈——青霉素是特效药\n🔬 潜伏期可长达数年，期间无明显症状\n🔬 孕期感染可导致流产、死胎、先天梅毒\n🔬 夫妻必须同治，否则"乒乓感染"反复交叉\n\n💡 关键科普：梅毒不可怕，可怕的是不知道、不查、不治、不告诉伴侣。',
        type: 'info',
      },
      nextNodeId: 'fs_risk',
    },

    // ========== 高危场景 ==========
    fs_risk: {
      id: 'fs_risk',
      stage: 'high_risk',
      sceneTitle: '那个夜晚',
      narrative:
        '闺蜜的单身派对上，你喝了不少酒。散场后，一个刚认识的朋友说顺路送你回家。\n\n那晚的事你记忆模糊，但隐约记得发生了无保护的亲密接触。\n\n第二天醒来，你懊悔不已。"就那一次，应该不会那么巧吧？"你这样安慰自己。\n\n但你的身体，正在悄然发生变化……',
      knowledge: {
        title: '一次就够——梅毒的传播风险',
        content:
          '梅毒的传播不需要"很多次"：\n\n• 单次无保护性行为感染梅毒的概率约30%-60%\n• 梅毒螺旋体可通过黏膜微小破损进入体内\n• 口交同样可以传播梅毒\n• 酒精影响判断力，增加高危行为风险\n\n⚠️ 关键认知：一次高危接触就可能感染，不存在"应该没事"的概率游戏。',
        type: 'warning',
      },
      choices: [
        {
          id: 'fs_r_1',
          text: '虽然很害怕，但应该去检查一下',
          isCorrect: true,
          knowledge: {
            title: '高危后主动检查是最正确的选择',
            content:
              '高危行为后，主动检查是保护自己的第一步：\n\n✅ 梅毒窗口期3-6周，高危后4周可做初步检测\n✅ 可去疾控中心做免费匿名检测\n✅ 早期发现=早期治疗=完全治愈\n✅ 也能及时保护伴侣不被传染\n\n主动检查不是"多事"，而是对自己和爱的人负责。',
            type: 'correct',
          },
          nextNodeId: 'fs_test_active',
          tags: ['tested'],
        },
        {
          id: 'fs_r_2',
          text: '就那一次，应该没事吧……',
          isCorrect: false,
          knowledge: {
            title: '"就那一次"的侥幸心理最危险',
            content:
              '侥幸心理是梅毒传播的最大帮凶：\n\n❌ 梅毒单次感染概率高达30%-60%，"一次就中"并不罕见\n❌ 等待"看有没有症状"是最不可靠的判断方式\n❌ 一期梅毒硬下疳不痛不痒，很容易被忽视\n❌ 延迟检查=延迟治疗=病情进展+传染他人\n\n💡 记住：高危后主动筛查是唯一的正确选择。',
            type: 'danger',
          },
          nextNodeId: 'fs_test_ignore',
          tags: ['ignored_exposure'],
        },
      ],
    },

    // ========== 主动检测路径 ==========
    fs_test_active: {
      id: 'fs_test_active',
      stage: 'test_result',
      sceneTitle: '主动检测',
      narrative:
        '你鼓起勇气去了疾控中心。咨询室里，医生详细询问了你的情况后，安排了抽血检测。\n\n"梅毒检测包括非梅毒螺旋体试验（RPR）和梅毒螺旋体试验（TPPA），两者结合可以准确判断。"医生解释道。\n\n一周后，结果出来了——梅毒抗体阳性，RPR滴度1:16。\n\n医生说："这是早期梅毒，治疗效果非常好。青霉素治疗可以完全治愈。"',
      knowledge: {
        title: '梅毒检测与早期发现',
        content:
          '梅毒检测的关键知识：\n\n🔬 窗口期：3-6周，高危后4周可做初步检测\n🔬 检测项目：\n• RPR（非梅毒螺旋体试验）：判断活动性感染和治疗效果\n• TPPA（梅毒螺旋体试验）：确认是否感染过梅毒\n🔬 免费检测：各地疾控中心提供免费匿名梅毒检测\n🔬 早期梅毒（一期/二期）规范治疗可100%治愈\n\n💡 早期发现是梅毒治疗的黄金窗口！越早治，越好治。',
        type: 'correct',
      },
      choices: [
        {
          id: 'fs_ta_1',
          text: '立刻开始治疗，并告诉阿杰真相',
          isCorrect: true,
          knowledge: {
            title: '坦诚告知+及时治疗=最佳方案',
            content:
              '确诊后立即治疗并告知伴侣，是最科学的做法：\n\n✅ 早期梅毒青霉素治疗效果极佳\n✅ 告知阿杰→他做检测→如感染一起治疗\n✅ 夫妻同治避免"乒乓感染"\n✅ 治愈后可安全备孕\n\n坦诚告知不是"丢脸"，而是对伴侣最大的尊重和保护。',
            type: 'correct',
          },
          nextNodeId: 'fs_tell_honest',
          tags: ['honest'],
        },
        {
          id: 'fs_ta_2',
          text: '先自己治，等治好了再说',
          isCorrect: false,
          knowledge: {
            title: '独自治疗≠解决问题',
            content:
              '只治自己不告诉伴侣，问题远未解决：\n\n❌ 治疗期间你和阿杰的亲密接触→他可能已被感染\n❌ 你治好了，他没治→他传回给你→乒乓感染\n❌ 阿杰不知情→无法保护自己\n❌ 治疗期间不复查→怎么确认治愈？\n\n💡 梅毒治疗必须夫妻同治，这是医学铁则。',
            type: 'danger',
          },
          nextNodeId: 'fs_tell_hide',
          tags: ['hidden'],
        },
      ],
    },

    // ========== 忽略检测路径 ==========
    fs_test_ignore: {
      id: 'fs_test_ignore',
      stage: 'test_result',
      sceneTitle: '沉默的身体',
      narrative:
        '你选择了不去检查。几周后，你发现下身出现了一个小小的溃疡，不痛也不痒。\n\n"可能是上火了吧……"你没太在意，过了一段时间它自己消失了。\n\n你不知道的是，那个不痛不痒的小溃疡，正是一期梅毒的典型症状——硬下疳。它消失不代表病好了，而是梅毒进入了下一个阶段……',
      knowledge: {
        title: '梅毒的"隐身术"——硬下疳',
        content:
          '一期梅毒的典型症状：\n\n🔬 硬下疳：生殖器部位出现圆形或椭圆形溃疡\n🔬 特点：不痛不痒、触之有软骨样硬度\n🔬 出现时间：感染后2-4周\n🔬 持续时间：3-6周后自行愈合\n\n⚠️ 关键误区：\n• 溃疡消失≠病好了→梅毒螺旋体进入血液，开始全身扩散\n• 不痛不痒≠不严重→恰恰是最容易被忽视的信号\n• "自己好了"≠自愈→梅毒不会自愈，只会进入更深的潜伏\n\n💡 任何生殖器部位的异常，都必须就医检查！',
        type: 'warning',
      },
      nextNodeId: 'fs_post_ignore',
    },

    // ========== 忽略检测后的进展 ==========
    fs_post_ignore: {
      id: 'fs_post_ignore',
      stage: 'post_exposure',
      sceneTitle: '隐患蔓延',
      narrative:
        '时间一天天过去。溃疡消失了，你以为一切恢复了正常。和阿杰的关系也在继续——包括亲密接触。\n\n你和阿杰开始谈婚论嫁。一切看起来很美好，除了你心里那根刺——那个你不敢面对的夜晚。\n\n梅毒螺旋体在你体内悄悄扩散着，而你每一次无保护的亲密接触，都在把风险传递给阿杰……',
      knowledge: {
        title: '梅毒不治疗只会越来越严重',
        content:
          '梅毒自然病程的进展：\n\n📅 一期：硬下疳（2-4周出现，3-6周自行消失）\n📅 二期：全身皮疹、淋巴结肿大（感染后6-8周）\n📅 潜伏期：无症状，但螺旋体仍在体内（可持续数年）\n📅 三期：心血管梅毒、神经梅毒、树胶肿（3-30年）\n\n⚠️ 每一个阶段都有传染性，尤其是早期和二期。不检查=不治疗=持续传播+病情恶化。',
        type: 'danger',
      },
      nextNodeId: 'fs_premarital_skip',
    },

    // ========== 坦诚告知 ==========
    fs_tell_honest: {
      id: 'fs_tell_honest',
      stage: 'tell_partner',
      sceneTitle: '坦诚相告',
      narrative:
        '你约阿杰出来，深呼吸了好几次，终于说出了真相："那晚派对后，我去做了个检查……查出梅毒阳性。"\n\n阿杰的表情从震惊变成沉默，过了好一会儿才说："谢谢你告诉我。我很生气那晚发生的事，但你愿意告诉我，我很感激。"\n\n医生安排阿杰做了检测——结果也是阳性。你们一起开始了青霉素治疗，这就是医学上说的"夫妻同治"。',
      knowledge: {
        title: '梅毒夫妻同治——医学铁则',
        content:
          '为什么梅毒必须夫妻同治？\n\n🔗 "乒乓感染"原理：\n• 你治好了，阿杰没治→阿杰传回给你→你再次感染\n• 阿杰治好了，你没治→你传回给阿杰→循环往复\n• 只有双方同时治疗，才能彻底阻断传播链\n\n📋 夫妻同治方案：\n• 双方同时开始青霉素治疗\n• 治疗期间避免性接触\n• 治疗后定期复查RPR滴度\n• 确认治愈后再恢复亲密关系\n\n✅ 早期梅毒规范治疗可100%治愈！夫妻同治是关键。',
        type: 'correct',
      },
      nextNodeId: 'fs_premarital_honest',
    },

    // ========== 隐瞒路径 ==========
    fs_tell_hide: {
      id: 'fs_tell_hide',
      stage: 'tell_partner',
      sceneTitle: '独自承受',
      narrative:
        '你选择先自己治疗。偷偷去医院打了青霉素针，心里想着"等我治好了，这事就翻篇了"。\n\n但你忽略了几个关键问题：\n1. 治疗期间你和阿杰仍有亲密接触——他可能已经被感染\n2. 你没有坚持复查——怎么确认真的治好了？\n3. 阿杰不知道，所以他没有做任何检测和防护\n\n你以为自己在保护这段关系，实际上你把最危险的风险留给了最爱的人。',
      knowledge: {
        title: '女性隐瞒梅毒=家庭传播的温床',
        content:
          '女性隐瞒梅毒对家庭的危害：\n\n❌ 阿杰不知情→持续暴露→可能被感染\n❌ 阿杰感染→传回给你→乒乓感染\n❌ 备孕/孕期才发现→胎儿面临先天梅毒风险\n❌ 信任崩塌→婚姻危机\n\n💡 女性隐瞒性传播疾病是导致伴侣感染和胎儿损害的重要原因之一。你的一个坦诚，可以避免整条连锁反应。',
        type: 'danger',
      },
      nextNodeId: 'fs_premarital_hide',
    },

    // ========== 婚前检查 - 坦诚路径 ==========
    fs_premarital_honest: {
      id: 'fs_premarital_honest',
      stage: 'premarital',
      sceneTitle: '婚检——守护家庭的第一步',
      narrative:
        '你们一起去做了婚前医学检查。因为已经知道你的情况，医生给出了详细的指导方案。\n\n经过规范治疗，你的RPR滴度已经明显下降。阿杰也在同步治疗中，进展良好。\n\n医生说："你们的治疗进展很好。梅毒早期完全可以治愈，等RPR滴度持续下降、稳定后，就可以开始备孕了。你们是做得最好的那类夫妻——坦诚、同治、科学备孕。"',
      knowledge: {
        title: '婚检+坦诚=最完整的家庭保障',
        content:
          '婚检对育龄女性的重要意义：\n\n🔍 梅毒对女性婚育的影响：\n• 孕期梅毒→流产率约20%、死胎率约10%\n• 先天梅毒→新生儿肝脾肿大、皮疹、骨骼损害\n• 但规范治疗后，完全可以安全生育\n\n📋 婚检是免费的国家公共卫生服务：\n• 艾梅乙三项是必查项目\n• 各区县妇幼保健院/指定医疗机构\n• 全免费、保护隐私\n• 婚检不是不信任，而是守护彼此的科学方式',
        type: 'correct',
      },
      choices: [
        {
          id: 'fs_pm_h_1',
          text: '继续规范治疗，等医生确认可以备孕后再开始',
          isCorrect: true,
          knowledge: {
            title: '梅毒治愈后备孕标准',
            content:
              '梅毒患者治愈后备孕的医学标准：\n\n📋 治愈判定：\n• 早期梅毒：治疗后RPR滴度持续下降，3-6个月内下降4倍以上\n• 定期复查：治疗后第3、6、12个月复查RPR\n\n📋 备孕时机：\n• 确认治疗效果良好、滴度稳定或转阴\n• 伴侣同步确认治愈\n• 在医生指导下开始备孕\n\n✅ 规范治疗的梅毒完全可以治愈，治愈后可安全生育健康宝宝！',
            type: 'correct',
          },
          nextNodeId: 'fs_prepregnancy_honest',
          tags: ['honest', 'premarital_check'],
        },
        {
          id: 'fs_pm_h_2',
          text: '先不急着备孕，但复查的事以后再说吧',
          isCorrect: false,
          knowledge: {
            title: '梅毒复查绝不能拖！',
            content:
              '梅毒治疗后必须定期复查，拖延复查等于"治疗白做"：\n\n⚠️ RPR滴度不下降=治疗失败或再感染\n⚠️ 不复查就无法确认是否真正治愈\n⚠️ 梅毒可"表面好转"实则潜伏进展\n⚠️ 拖延复查期间如果怀孕，胎儿风险极大\n\n💡 梅毒治疗后第3、6、12个月必须复查RPR。这是确认治愈的唯一方式，没有捷径。',
            type: 'warning',
          },
          nextNodeId: 'fs_prepregnancy_delay',
          tags: ['honest', 'delayed_followup'],
        },
      ],
    },

    // ========== 婚前检查 - 隐瞒路径 ==========
    fs_premarital_hide: {
      id: 'fs_premarital_hide',
      stage: 'premarital',
      sceneTitle: '逃避婚检',
      narrative:
        '领证前，社区通知免费婚检。你心里一紧——婚检会查梅毒，万一查出来阿杰就知道了。\n\n"婚检又不是强制的，我们身体健康不用查。"你这样跟阿杰说。阿杰觉得你说得有道理，就同意了。\n\n你们跳过了婚检，顺利领了证。你松了一口气——但这口气松得太早。跳过婚检不是逃避了问题，而是关闭了最重要的发现窗口。',
      choices: [
        {
          id: 'fs_pm_hd_1',
          text: '已经领证了，趁热打铁开始备孕吧！',
          isCorrect: false,
          knowledge: {
            title: '隐瞒+跳过婚检+直接备孕=高风险组合',
            content:
              '这是最危险的决定组合：\n\n❌ 你不知道自己是否治愈——RPR滴度未确认\n❌ 阿杰没有检测——他可能已被感染\n❌ 没有医生的婚育指导——不知道何时可以安全备孕\n❌ 孕期才发现问题→可能错过最佳干预时机\n\n⚠️ 梅毒孕期感染是导致不良妊娠结局的重要原因之一。而这一切只需要做一个检查就可以避免！',
            type: 'danger',
          },
          nextNodeId: 'fs_prepregnancy_hide',
          tags: ['hidden', 'skipped_check', 'direct_pregnancy'],
        },
        {
          id: 'fs_pm_hd_2',
          text: '虽然跳过了婚检，但备孕前还是应该去做个孕前检查',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，犹未为晚',
            content:
              '虽然跳过了婚检，孕前检查是另一个重要的筛查关口：\n\n✅ 孕前检查同样包含艾梅乙筛查\n✅ 可以评估你当前的治疗效果\n✅ 可以给阿杰做梅毒检测\n✅ 可以获得科学的备孕指导\n\n💡 重要的不是之前错过了什么，而是现在开始做正确的事。',
            type: 'info',
          },
          nextNodeId: 'fs_prepregnancy_late_check',
          tags: ['hidden', 'late_check'],
        },
      ],
    },

    // ========== 婚前检查 - 未检测路径 ==========
    fs_premarital_skip: {
      id: 'fs_premarital_skip',
      stage: 'premarital',
      sceneTitle: '婚检机会',
      narrative:
        '领证前，社区通知免费婚检。你心里隐约有些不安，毕竟那晚之后你一直没去检查……\n\n阿杰说："去做个婚检吧，也是对彼此负责。"',
      choices: [
        {
          id: 'fs_pm_s_1',
          text: '去做婚检，正好查一下艾梅乙',
          isCorrect: true,
          knowledge: {
            title: '婚检是发现隐匿感染的关键机会',
            content:
              '梅毒隐匿发展的特点：\n\n• 一期硬下疳不痛不痒→容易被忽视\n• 潜伏期可长达数年，无声无息地损害身体\n• 只有血液检测才能发现\n\n婚检中的梅毒筛查是主动发现"隐形炸弹"的机会。早发现=早治疗=保护伴侣和孩子。',
            type: 'correct',
          },
          nextNodeId: 'fs_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'fs_pm_s_2',
          text: '不用查了，身体没什么不舒服',
          isCorrect: false,
          knowledge: {
            title: '"没症状"≠没感染',
            content:
              '梅毒最大的狡猾之处就是"沉默"：\n\n❌ 硬下疳不痛不痒，很多人没注意到\n❌ 潜伏期可长达数年，期间完全无症状\n❌ 无症状≠不传染，恰恰相反，早期传染性最强\n❌ "感觉没事"是最危险的信号\n\n主动筛查是唯一的确定性。',
            type: 'danger',
          },
          nextNodeId: 'fs_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚检发现感染 ==========
    fs_premarital_check_discover: {
      id: 'fs_premarital_check_discover',
      stage: 'premarital',
      sceneTitle: '婚检意外发现',
      narrative:
        '婚检结果出来了——梅毒抗体阳性，RPR滴度1:8。\n\n阿杰坐在你旁边，看着报告，表情复杂。他轻声问："这是怎么回事？"',
      choices: [
        {
          id: 'fs_pm_cd_1',
          text: '"我有件事必须坦白……那晚我犯了错，之后一直不敢面对。但从现在起，我不想再骗你了。"',
          isCorrect: true,
          knowledge: {
            title: '迟来的坦诚依然是勇气',
            content:
              '虽然晚了，但坦诚永远不嫌迟：\n\n✅ 婚检帮你发现了问题——这就是婚检的价值\n✅ 阿杰需要立即做梅毒检测\n✅ 如感染，夫妻同治是最佳方案\n✅ 梅毒早期可完全治愈，治愈后可安全生育\n\n"认错"不容易，但比继续隐瞒好一万倍。',
            type: 'correct',
          },
          nextNodeId: 'fs_prepregnancy_honest_late',
          tags: ['tested_late', 'honest_late'],
        },
        {
          id: 'fs_pm_cd_2',
          text: '"我也不知道怎么感染的……可能是以前什么事吧"',
          isCorrect: false,
          knowledge: {
            title: '半隐瞒比坦诚更危险',
            content:
              '含糊其辞的危害：\n\n❌ 阿杰无法判断自己的暴露风险→无法决定是否需要检测\n❌ 不清楚感染来源→无法追溯传播链\n❌ 如果阿杰已被感染，延迟检测=延迟治疗\n\n完整的真相=完整的防护。与其编造模糊的理由，不如坦白说出真相。',
            type: 'danger',
          },
          nextNodeId: 'fs_prepregnancy_half_hide',
          tags: ['tested_late', 'half_hidden'],
        },
      ],
    },

    // ========== 完全跳过婚检 ==========
    fs_premarital_skip_all: {
      id: 'fs_premarital_skip_all',
      stage: 'premarital',
      sceneTitle: '跳过婚检',
      narrative:
        '你们跳过了婚检，顺利领证结婚。你安慰自己："没事的，身体好着呢。"\n\n婚后很快开始备孕，两个月后你怀孕了。\n\n没有人知道，梅毒螺旋体正在你体内悄悄影响着一切……',
      knowledge: {
        title: '跳过婚检=放弃主动权',
        content:
          '婚前检查是发现隐匿感染的黄金窗口：\n\n• 跳过婚检→孕前不知道感染状况→无防护备孕\n• 梅毒孕期感染→流产率20%、死胎率10%\n• 先天梅毒对新生儿危害极大\n\n婚检不是负担，而是保障。免费的、私密的、科学的——没有理由跳过。',
        type: 'warning',
      },
      nextNodeId: 'fs_prenatal_skip_all',
    },

    // ========== 孕前检查 - 坦诚路径 ==========
    fs_prepregnancy_honest: {
      id: 'fs_prepregnancy_honest',
      stage: 'prepregnancy',
      sceneTitle: '科学备孕',
      narrative:
        '经过3个月的规范治疗，你的RPR滴度从1:16降到了1:2，持续下降趋势良好。阿杰的检测也转阴了。\n\n医生评估后说："治疗效果很好，可以开始备孕了。但孕期仍需定期复查，确保不复发。"\n\n你们终于迎来了好消息——你怀孕了！',
      knowledge: {
        title: '梅毒治愈后备孕要点',
        content:
          '梅毒治愈后备孕的科学方案：\n\n📋 治愈标准：\n• 早期梅毒：RPR滴度下降4倍以上或转阴\n• 治疗后3、6、12个月定期复查\n\n📋 孕期管理：\n• 孕期仍需做梅毒筛查（产检必查项目）\n• 定期复查RPR，确保不复发\n• 如有复发迹象，立即治疗\n\n📋 新生儿管理：\n• 出生后做梅毒相关检测\n• 定期随访至18月龄\n\n✅ 规范治疗+科学备孕=健康宝宝！',
        type: 'correct',
      },
      nextNodeId: 'fs_prenatal_honest',
    },

    // ========== 孕前检查 - 坦诚（晚发现）==========
    fs_prepregnancy_honest_late: {
      id: 'fs_prepregnancy_honest_late',
      stage: 'prepregnancy',
      sceneTitle: '亡羊补牢',
      narrative:
        '虽然发现得晚了些，但你选择了坦诚。阿杰去做了检测——也是阳性。\n\n你们一起开始了青霉素治疗——这就是夫妻同治。阿杰虽然难过你之前没说，但更感激你最终选择了诚实。\n\n半年后，在医生确认你们都治疗达标后，你们开始了新的旅程。',
      knowledge: {
        title: '晚发现≠晚治疗',
        content:
          '即使发现较晚，开始规范治疗仍然可以完全治愈：\n\n✅ 早期梅毒青霉素治疗可100%治愈\n✅ 夫妻同治阻断乒乓感染\n✅ 治愈后可安全备孕\n✅ 关键是：不隐瞒+不拖延+遵医嘱\n\n"晚一步"总好过"不迈步"。',
        type: 'correct',
      },
      nextNodeId: 'fs_prenatal_honest',
    },

    // ========== 孕前检查 - 半隐瞒路径 ==========
    fs_prepregnancy_half_hide: {
      id: 'fs_prepregnancy_half_hide',
      stage: 'prepregnancy',
      sceneTitle: '模糊的真相',
      narrative:
        '你没有完全坦白高危接触的事，只是含糊地说"可能是以前就有了"。阿杰半信半疑，但也没有深究。\n\n你开始治疗，但阿杰一直没去做检测。你们很快开始备孕——你觉得"打针了应该没事了吧"。',
      knowledge: {
        title: '不完整的真相=不完整的防护',
        content:
          '半隐瞒导致半防护：\n\n⚠️ 阿杰没有做检测——他不知道自己是否感染\n⚠️ 你没有告诉他高危经历→他可能有暴露风险却不知道\n⚠️ 缺少伴侣监督→你的治疗依从性可能打折扣\n⚠️ 不完整的沟通→家庭防护存在漏洞\n\n完整的真相=完整的防护。任何隐瞒都会让防护体系出现薄弱环节。',
        type: 'warning',
      },
      nextNodeId: 'fs_prenatal_half_hide',
    },

    // ========== 孕前检查 - 隐瞒路径 ==========
    fs_prepregnancy_hide: {
      id: 'fs_prepregnancy_hide',
      stage: 'prepregnancy',
      sceneTitle: '侥幸备孕',
      narrative:
        '你隐瞒了梅毒的事实，和阿杰开始备孕。没有复查确认是否治愈，阿杰也没有做检测。\n\n你偷偷打了几针青霉素，觉得"应该差不多了"。\n\n两个月后你怀孕了。你既兴奋又害怕——你不确定自己是否真的治好了，更不确定是否已经把梅毒传给了宝宝。',
      knowledge: {
        title: '未确认治愈就备孕=高风险赌博',
        content:
          '梅毒未确认治愈就备孕的风险：\n\n❌ 不确认治愈→可能仍有传染性\n❌ 孕期梅毒→流产率约20%、死胎率约10%\n❌ 先天梅毒→新生儿全身性损害\n❌ 你自己可能也没治好→病情继续发展\n\n"打了针≠治好了"，必须通过RPR滴度复查确认。',
        type: 'danger',
      },
      nextNodeId: 'fs_prenatal_hide',
    },

    // ========== 孕前检查 - 补查路径 ==========
    fs_prepregnancy_late_check: {
      id: 'fs_prepregnancy_late_check',
      stage: 'prepregnancy',
      sceneTitle: '孕前补查',
      narrative:
        '虽然跳过了婚检，但你决定去做孕前检查。结果显示梅毒抗体阳性，RPR滴度1:8。\n\n这一次，你没有再犹豫。你告诉了阿杰真相——关于那晚的高危接触，关于你一直以来的隐瞒。\n\n阿杰沉默了很久，最后说："我难过的是你不信任我，不是你生病了。但至少你现在说了，我们一起面对。"',
      choices: [
        {
          id: 'fs_ppg_lc_1',
          text: '和阿杰一起去看医生，制定治疗方案和备孕计划',
          isCorrect: true,
          knowledge: {
            title: '坦诚之后，科学跟上',
            content:
              '孕前发现梅毒后的科学应对：\n\n1️⃣ 立即开始规范青霉素治疗\n2️⃣ 阿杰做梅毒检测+夫妻同治\n3️⃣ 等RPR滴度达标后再备孕\n4️⃣ 孕期做好产检和复查\n\n虽然隐瞒让人遗憾，但最终选择坦诚和科学，仍然可以守护家庭！',
            type: 'correct',
          },
          nextNodeId: 'fs_prenatal_honest',
          tags: ['honest_late', 'late_check'],
        },
        {
          id: 'fs_ppg_lc_2',
          text: '我自己治就行了，不用让阿杰也去检查',
          isCorrect: false,
          knowledge: {
            title: '梅毒必须夫妻同治！',
            content:
              '梅毒只治一方是无效的——这是医学铁律：\n\n⚠️ 如果阿杰也感染了不治疗，你们之间会反复交叉感染\n⚠️ 你治好了又被阿杰传染=治疗白费\n⚠️ 阿杰的梅毒会继续发展，损害心血管和神经系统\n\n💡 夫妻同治是梅毒治疗的基本原则，不是可选项。只有双方同时治愈，才能真正断绝传播链。',
            type: 'warning',
          },
          nextNodeId: 'fs_prenatal_honest_no_partner_check',
          tags: ['honest_late', 'no_partner_check'],
        },
      ],
    },

    // ========== 孕前检查 - 拖延复查路径 ==========
    fs_prepregnancy_delay: {
      id: 'fs_prepregnancy_delay',
      stage: 'prepregnancy',
      sceneTitle: '复查拖延',
      narrative:
        '你虽然做了梅毒治疗，但总觉得"打了针应该就好了"，没认真去复查RPR滴度。几个月过去了，你意外发现自己怀孕了——不知道自己是否治愈，也没确认过阿杰的情况。',
      choices: [
        {
          id: 'fs_ppg_d_1',
          text: '立刻去医院做全面检查，确认治疗结果',
          isCorrect: true,
          knowledge: {
            title: '立刻行动仍有机会',
            content:
              '即使拖延了复查，只要立即就医仍然可以科学防护：\n\n✅ 立即查RPR滴度，确认治疗效果\n✅ 让阿杰也做梅毒筛查\n✅ 如果未治愈，孕期仍可规范治疗\n✅ 制定分娩和新生儿管理方案\n\n💡 重要的不是之前错过了什么，而是现在立刻行动。梅毒孕期治疗同样有效，关键是不再拖延。',
            type: 'correct',
          },
          nextNodeId: 'fs_prenatal_honest',
          tags: ['honest', 'late_start'],
        },
        {
          id: 'fs_ppg_d_2',
          text: '已经打过针了应该没事，等产检再说吧',
          isCorrect: false,
          knowledge: {
            title: '打了针≠治好了',
            content:
              '梅毒治疗"打一针就万事大吉"是最常见的误区：\n\n❌ 青霉素治疗需要完整疗程，不是一针就够\n❌ 不复查RPR滴度=不知道是否真正治愈\n❌ 孕期梅毒不治疗→流产率20%、死胎率10%\n❌ 先天梅毒可致新生儿全身多器官损害\n\n⚠️ "打了针"只是治疗的开始，不是结束。复查确认才是真正的"治好"。',
            type: 'danger',
          },
          nextNodeId: 'fs_prenatal_hide',
          tags: ['hidden', 'passive'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚但伴侣未查 ==========
    fs_prenatal_honest_no_partner_check: {
      id: 'fs_prenatal_honest_no_partner_check',
      stage: 'prenatal',
      sceneTitle: '反复感染',
      narrative:
        '你规范治疗了梅毒，RPR滴度也在下降。但在孕20周复查时，RPR滴度突然回升——医生说你可能被再次感染了。\n\n"你的伴侣做过检测吗？"医生问。阿杰从未做过梅毒检查。',
      choices: [
        {
          id: 'fs_pn_hnpc_1',
          text: '让阿杰立即检查并同步治疗',
          isCorrect: true,
          knowledge: {
            title: '夫妻同治才能断根',
            content:
              '梅毒反复感染的根本原因就是只治一方：\n\n✅ 阿杰立即做梅毒检测\n✅ 如果阳性，夫妻同时规范治疗\n✅ 治疗期间避免无保护接触\n✅ 双方定期复查RPR确认治愈\n\n💡 梅毒夫妻同治不是建议，是必须。只有双方同时治愈，才能彻底断绝传播链。',
            type: 'correct',
          },
          nextNodeId: 'fs_prenatal_honest',
          tags: ['honest', 'partner_treated'],
        },
        {
          id: 'fs_pn_hnpc_2',
          text: '可能是我自己没治好吧，再打一针就行了',
          isCorrect: false,
          knowledge: {
            title: '反复感染≠治疗失败',
            content:
              'RPR滴度回升最常见的原因是再感染，不是治疗失败：\n\n❌ 只治自己不治伴侣=治好了又被传染\n❌ 反复感染会让治疗更加困难\n❌ 孕期反复感染严重危害胎儿\n\n💡 治病要治本——本就是"传染源"。伴侣不查不治，你永远治不好。',
            type: 'warning',
          },
          nextNodeId: 'fs_prenatal_hide',
          tags: ['hidden', 'reinfected'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚路径 ==========
    fs_prenatal_honest: {
      id: 'fs_prenatal_honest',
      stage: 'prenatal',
      sceneTitle: '守护新生命',
      narrative:
        '孕期一切顺利。你每次产检都按时做梅毒筛查，RPR滴度持续下降，趋势良好。阿杰的检测也一直是阴性。\n\n宝宝出生了——一个健康的女孩！新生儿梅毒筛查阴性，一切指标正常。\n\n阿杰抱着宝宝，看着你说："我们走过了一段不容易的路，但每一步都是对的。谢谢你告诉我真相。"',
      knowledge: {
        title: '女性梅毒治愈后可安全生育',
        content:
          '你的经历证明了：\n\n✅ 梅毒早期可完全治愈——青霉素是特效药\n✅ 夫妻同治是关键——一个人治不算治\n✅ 治愈后可安全备孕——不会影响胎儿\n✅ 坦诚告知是守护家庭的最佳选择\n\n📋 孕期管理要点：\n• 产检梅毒筛查是必查项目\n• 定期复查RPR滴度\n• 如有复发迹象，立即治疗\n• 新生儿出生后做梅毒相关检测',
        type: 'correct',
      },
      nextNodeId: 'fs_ending_perfect',
    },

    // ========== 孕期产检 - 半隐瞒路径 ==========
    fs_prenatal_half_hide: {
      id: 'fs_prenatal_half_hide',
      stage: 'prenatal',
      sceneTitle: '孕期的意外',
      narrative:
        '你怀孕了，去做第一次产检。艾梅乙筛查结果——梅毒抗体阳性！\n\n阿杰也被叫来做检测，结果也是阳性。他看着报告，眼里满是震惊："我怎么会感染梅毒？"\n\n在诊室里，你终于无法再回避了，向阿杰说出了全部真相。',
      knowledge: {
        title: '孕期发现梅毒的紧急处理',
        content:
          '孕期发现梅毒需要立即采取行动：\n\n🏥 孕期梅毒治疗：\n• 立即开始青霉素治疗（妊娠期唯一安全有效的药物）\n• 早期治疗可显著降低胎儿感染风险\n• 治疗后需密切监测\n\n🏥 先天梅毒的危害：\n• 肝脾肿大、皮疹、骨骼损害\n• 神经性耳聋、智力发育迟缓\n• 规范治疗后风险大幅降低',
        type: 'warning',
      },
      choices: [
        {
          id: 'fs_pn_hh_1',
          text: '彻底坦白，全力配合医生做孕期治疗和新生儿防护',
          isCorrect: true,
          knowledge: {
            title: '孕期积极治疗仍可有效保护宝宝',
            content:
              '虽然发现较晚，孕期治疗仍然有效：\n\n✅ 青霉素可快速杀灭梅毒螺旋体\n✅ 越早治疗，胎儿感染风险越低\n✅ 新生儿出生后做好检测和预防性治疗\n✅ 定期随访确保宝宝健康\n\n坦诚+科学=给宝宝最好的保护。',
            type: 'correct',
          },
          nextNodeId: 'fs_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fs_pn_hh_2',
          text: '无法面对阿杰的质问，想逃避这一切',
          isCorrect: false,
          knowledge: {
            title: '孕期逃避=拿宝宝的健康赌博',
            content:
              '孕期继续逃避的后果：\n\n❌ 治疗不完整→胎儿持续暴露→先天梅毒风险极高\n❌ 你自己可能也未治愈→持续传染\n❌ 新生儿出生后无完整防护方案\n❌ 信任彻底崩塌\n\n宝宝的健康经不起你的逃避。孕期是保护新生命的关键时刻！',
            type: 'danger',
          },
          nextNodeId: 'fs_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 隐瞒路径 ==========
    fs_prenatal_hide: {
      id: 'fs_prenatal_hide',
      stage: 'prenatal',
      sceneTitle: '纸包不住火',
      narrative:
        '孕期产检——梅毒抗体阳性。更糟糕的是，阿杰也被查出了梅毒阳性。\n\n他拿着报告，眼泪无声地滑落："你早就知道了，是不是？你为什么不告诉我？"\n\n医生面色凝重："孕期梅毒感染，需要立即启动母婴阻断方案。"',
      knowledge: {
        title: '隐瞒梅毒导致伴侣和胎儿双重风险',
        content:
          '女性隐瞒梅毒的最惨痛后果：\n\n💔 阿杰被感染——你传给他的\n💔 孕期梅毒→先天梅毒风险极高\n💔 流产率约20%、死胎率约10%\n💔 信任崩塌→婚姻危机\n\n💡 这一切只需一次坦诚就可以避免。梅毒早期可100%治愈，但前提是你要检查、要告知、要同治。',
        type: 'danger',
      },
      choices: [
        {
          id: 'fs_pn_hd_1',
          text: '彻底认错，全力配合治疗和母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，全力以赴',
            content:
              '虽然后果已经造成，积极治疗仍有希望：\n\n✅ 立即开始孕期青霉素治疗\n✅ 密切监测胎儿发育\n✅ 新生儿出生后做好检测和防护\n✅ 你和阿杰都继续规范治疗\n\n过去的错误无法撤销，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'fs_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fs_pn_hd_2',
          text: '无法面对，选择逃避和否认',
          isCorrect: false,
          knowledge: {
            title: '逃避只会让一切更糟',
            content:
              '孕期逃避的最终后果：\n\n❌ 妻子治疗不完整→胎儿先天梅毒风险极高\n❌ 新生儿可能终身健康损害\n❌ 你自己病情继续发展\n❌ 婚姻无法维系\n\n宝宝的健康经不起你的逃避。勇敢面对，是唯一正确的路。',
            type: 'danger',
          },
          nextNodeId: 'fs_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 完全跳过检查路径 ==========
    fs_prenatal_skip_all: {
      id: 'fs_prenatal_skip_all',
      stage: 'prenatal',
      sceneTitle: '孕期意外',
      narrative:
        '怀孕了，你去做第一次产检。艾梅乙筛查是产检必查项目——你想躲也躲不了。\n\n结果：梅毒抗体阳性，RPR滴度1:16。阿杰检测结果也是阳性。\n\n医生严肃地问："你们之前做过婚检吗？知道自己有梅毒吗？"\n\n阿杰就坐在旁边，满脸震惊。此刻，所有的隐瞒都在这一刻被撕开……',
      knowledge: {
        title: '产检是最后的防线',
        content:
          '即使跳过了婚检和孕前检查，孕期产检也会发现梅毒感染：\n\n🏥 孕期首次产检必查艾梅乙\n🏥 孕期发现比孕前发现风险更高，但积极治疗仍可降低胎儿损害\n\n如果提前做婚检/孕前检查：\n• 可以在备孕前治愈\n• 伴侣免于感染\n• 宝宝免于先天梅毒风险\n\n跳过检查不会消除风险，只会推迟发现、增加代价。',
        type: 'warning',
      },
      choices: [
        {
          id: 'fs_pn_sa_1',
          text: '面对现实，坦白一切，全力配合医生',
          isCorrect: true,
          knowledge: {
            title: '从现在开始做正确的事',
            content:
              '孕期积极治疗仍可有效降低风险：\n\n1️⃣ 立即开始青霉素治疗\n2️⃣ 密切监测胎儿发育\n3️⃣ 新生儿出生后做好检测和防护\n4️⃣ 你和阿杰都规范治疗\n5️⃣ 坦诚沟通，用行动弥补\n\n过去无法改变，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'fs_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fs_pn_sa_2',
          text: '无法面对，试图回避',
          isCorrect: false,
          knowledge: {
            title: '逃避的最终代价',
            content:
              '孕期逃避意味着：\n❌ 先天梅毒几乎不可避免\n❌ 宝宝终身健康损害\n❌ 家庭关系无法修复\n\n宝宝的健康经不起你的逃避。勇敢面对，是唯一正确的选择。',
            type: 'danger',
          },
          nextNodeId: 'fs_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 结局：完美 ==========
    fs_ending_perfect: {
      id: 'fs_ending_perfect',
      stage: 'ending',
      sceneTitle: '🌟 坦诚守护，阖家安康',
      narrative:
        '宝宝出生后一切健康，梅毒筛查阴性。阿杰也没有被感染。\n\n回望这段路：你经历了高危暴露后的恐惧、主动检测的勇气、向阿杰坦白的不安、夫妻同治的坚持……每一步你都选择了最难但最正确的路。\n\n阿杰抱着宝宝对你说："你做了最勇敢的事——面对、坦诚、一起治疗。我很骄傲你是我妻子。"\n\n你知道，守护家庭健康，是你们共同最重要的责任。而你，做到了。',
      isEnding: true,
      endingType: 'perfect',
      endingTitle: '坦诚守护，阖家安康',
      endingNarrative:
        '全程主动检测、坦诚告知、夫妻同治、规范治疗、科学备孕。你深刻践行了"梅毒可防可治"理念，守护了伴侣和孩子的健康，维护了家庭信任与和睦。',
      knowledge: {
        title: '完美结局的核心启示',
        content:
          '你的选择证明了：\n\n✅ 梅毒早期可100%治愈——青霉素是特效药\n✅ 夫妻同治是关键——一个人治不算治\n✅ 坦诚是最好的守护——给伴侣知情权和保护权\n✅ 主动筛查是标配——婚检孕检是守护家庭的第一道防线\n\n🌟 记住：疾病不可怕，隐瞒和侥幸才是最大的敌人。坦诚+科学+坚持，就是守护家庭的最强力量！',
        type: 'correct',
      },
    },

    // ========== 结局：普通 ==========
    fs_ending_normal: {
      id: 'fs_ending_normal',
      stage: 'ending',
      sceneTitle: '⚠️ 心存侥幸，暗藏隐患',
      narrative:
        '虽然最终选择了积极治疗和母婴阻断，但因为发现较晚，宝宝需要在出生后密切监测和预防性治疗。\n\n阿杰虽然选择和你一起面对，但心里有了裂痕："我不是怪你生病，我难过的是你一开始没有相信我。"\n\n好在积极治疗下，宝宝的预后尚可。你们用行动弥补过去的错误，但信任的重建需要更长时间。',
      isEnding: true,
      endingType: 'normal',
      endingTitle: '心存侥幸，暗藏隐患',
      endingNarrative:
        '存在隐瞒和拖延，虽未造成最坏结果，但增加了治疗难度和情感伤害。及时补救仍可守护家庭，但信任的修复需要时间和行动。',
      knowledge: {
        title: '普通结局的警示',
        content:
          '你的经历提醒所有人：\n\n⚠️ 隐瞒增加一切风险——发现越晚，治疗窗口越小\n⚠️ 信任需要勇气维护——早坦诚比晚坦白好一万倍\n⚠️ 但亡羊补牢犹未为晚——积极治疗仍可有效控制\n\n📌 补救建议：\n• 宝宝完成全部治疗和随访\n• 你和阿杰坚持规范治疗和复查\n• 用持续的行动重建信任\n\n每一个现在开始做正确选择的时刻，都是对家庭最好的守护。',
        type: 'warning',
      },
    },

    // ========== 结局：遗憾 ==========
    fs_ending_regret: {
      id: 'fs_ending_regret',
      stage: 'ending',
      sceneTitle: '💔 隐瞒致险，家庭受损',
      narrative:
        '持续隐瞒和逃避的恶果终于爆发——\n\n宝宝出生后被确诊先天梅毒，需要长期治疗和随访。阿杰也在产检时被查出感染。\n\n当阿杰得知你早已知情却选择隐瞒时，他的眼神从震惊变成愤怒，最后变成了深深的失望。\n\n"我不怕你生病，我怕的是你不信任我。"阿杰收拾了行李。\n\n留下你一个人，抱着需要长期治疗的宝宝，在产房里流泪。这一切本可以不同……',
      isEnding: true,
      endingType: 'regret',
      endingTitle: '隐瞒致险，家庭受损',
      endingNarrative:
        '高危后逃避检查、刻意隐瞒、拒绝筛查，导致伴侣感染、胎儿先天梅毒、婚恋信任崩塌。这一切的根源，不是疾病本身，而是隐瞒与侥幸。',
      knowledge: {
        title: '遗憾结局的核心反思',
        content:
          '这个结局最大的悲剧在于——它是完全可避免的：\n\n🟢 如果高危后主动检测 → 早期发现，完全可治愈\n🟢 如果确诊后坦诚告知 → 伴侣获得保护，夫妻同治\n🟢 如果参加婚检 → 提前发现，安全备孕\n🟢 如果规范治疗 → 宝宝免于先天梅毒\n\n💡 正向科普——永远不晚：\n• 梅毒可治愈——立即开始规范治疗\n• 艾滋病可正常婚育——U=U（检测不到=不传染）\n• 乙肝可防可控——母婴阻断成功率>95%\n• 先天梅毒可以治疗——尽早干预可改善预后\n• 补救方案：立即就医、规范治疗、伴侣筛查、家庭沟通\n\n记住：疾病不是悲剧，隐瞒和侥幸才是。选择坦诚和科学，永远不晚。',
        type: 'danger',
      },
    },
  },
};
