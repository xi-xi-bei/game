// 女性视角 - 艾滋病剧情数据
import type { PerspectiveData, DiseaseType } from './game-types';

const disease: DiseaseType = 'hiv';

export const femaleHivData: PerspectiveData = {
  perspective: 'female',
  title: '女性育龄视角 · 艾滋病',
  subtitle: '直面恐惧，科学守护',
  description: '你是一位育龄女性，高危接触后感染了艾滋病。在恐惧与希望之间，你的每一个选择都将决定自己和宝宝的命运。艾滋病不等于人生终结——U=U、母婴阻断成功率超98%，科学防治让你一样可以拥抱幸福。',
  protagonistName: '小琳',
  protagonistAge: 27,
  protagonistStatus: '未婚，与男友恋爱2年，近期计划结婚',
  diseaseAssigned: disease,
  startNodeId: 'fh_intro',
  nodes: {
    // ========== 开篇介绍 ==========
    fh_intro: {
      id: 'fh_intro',
      stage: 'intro',
      sceneTitle: '故事开始',
      narrative:
        '你叫小琳，27岁，是一名幼儿园老师。和男友阿杰恋爱两年，感情甜蜜，已经在筹备婚礼。\n\n你一直觉得自己的人生很顺利——稳定的工作、温柔的爱人、即将到来的婚姻。直到那个深夜，一通电话彻底打碎了你的平静……',
      nextNodeId: 'fh_high_risk',
    },

    // ========== 高危场景 ==========
    fh_high_risk: {
      id: 'fh_high_risk',
      stage: 'high_risk',
      sceneTitle: '那个深夜',
      narrative:
        '闺蜜拉你去酒吧散心，你认识了一个叫阿凯的男生。几杯酒过后，氛围暧昧，你鬼使神差地和他去了酒店——没有安全措施。\n\n第二天醒来，阿凯已经离开了。你翻看他留下的电话号码，拨过去却是空号。\n\n你突然想起一件事——你完全不了解这个人的健康状况。一种从未有过的不安涌上心头。',
      choices: [
        {
          id: 'fh_hr_1',
          text: '心里不安，但觉得就这一次，应该没那么巧……先不想了',
          isCorrect: false,
          knowledge: {
            title: '侥幸心理是最危险的',
            content:
              '一次无保护性行为就可能感染艾滋病：\n\n• 单次无保护性行为感染HIV的概率约0.1%-3%（女方感染率高于男方）\n• 女性生殖道黏膜面积大，更容易在性接触中感染\n• 一次就够——HIV只需要一次机会就能改变你的一生\n• 但好消息是：72小时内可以服用阻断药（PEP），越早越好！\n\n"就这一次"的侥幸，可能让你失去72小时的黄金阻断时间。',
            type: 'danger',
          },
          nextNodeId: 'fh_post_ignore',
          tags: ['ignored_exposure'],
        },
        {
          id: 'fh_hr_2',
          text: '虽然害怕，但我必须尽快处理——立刻查紧急阻断信息',
          isCorrect: true,
          knowledge: {
            title: '72小时黄金窗口——HIV紧急阻断',
            content:
              '高危行为后的处理时间决定一切：\n\n🟢 HIV暴露后预防（PEP）：\n• 72小时内服用阻断药，越早越好\n• 2小时内服药，阻断成功率高达99%！\n• 24小时内服药，成功率约90%\n• 72小时后，阻断机会消失\n\n🟢 正确做法：\n1️⃣ 立即前往当地疾控中心或感染科\n2️⃣ 评估暴露风险，尽早开始PEP\n3️⃣ 服药28天，不可间断\n4️⃣ 暴露后2-6周做四代检测\n5️⃣ 暂停备孕，坚持使用安全套\n\n你的及时行动，可能是挽救自己和家庭的关键！',
            type: 'correct',
          },
          nextNodeId: 'fh_post_active',
          tags: ['active_response'],
        },
      ],
    },

    // ========== 高危后 - 忽略 ==========
    fh_post_ignore: {
      id: 'fh_post_ignore',
      stage: 'post_exposure',
      sceneTitle: '心存侥幸',
      narrative:
        '你选择了不去想这件事。日子继续过，婚礼筹备在推进，你和阿杰憧憬着未来的小家庭。\n\n几周后，你偶尔觉得有些低烧、喉咙不适，以为是换季感冒。吃了几天药，症状确实消退了。\n\n你不知道，那可能正是HIV急性期的信号——病毒正在你体内快速复制，而你的免疫系统正在遭遇第一波冲击……',
      knowledge: {
        title: 'HIV急性期——最容易被忽视的信号',
        content:
          'HIV感染后2-4周，约50%-70%的人会出现"急性期"症状：\n\n• 发热（最常见）\n• 咽喉痛、淋巴结肿大\n• 皮疹、肌肉酸痛\n• 类似感冒或传染性单核细胞增多症\n\n⚠️ 这些症状1-2周后自行消失，很多人以为"只是感冒"\n⚠️ 症状消失≠痊愈！病毒转入潜伏期，持续破坏免疫系统\n⚠️ 急性期传染性最强——病毒载量可达峰值\n\n女性尤其需要注意：急性期症状很容易被误认为普通妇科问题或疲劳，延误了最佳检测和治疗时机。',
        type: 'warning',
      },
      nextNodeId: 'fh_premarital_skip',
    },

    // ========== 高危后 - 主动应对 ==========
    fh_post_active: {
      id: 'fh_post_active',
      stage: 'post_exposure',
      sceneTitle: '抓住黄金时间',
      narrative:
        '你立刻上网搜索了"HIV暴露后紧急处理"，第二天一早就赶到了市疾控中心。\n\n医生评估了你的暴露风险，给你开了HIV阻断药（PEP）。你需要在28天内坚持服药，不能漏服。\n\n"你来得及时，阻断药在72小时内开始服用效果最好。"医生说，"但阻断药不是100%保险，6周后需要做检测确认。"',
      knowledge: {
        title: 'HIV阻断药（PEP）核心知识',
        content:
          'PEP是目前唯一的事后HIV预防手段：\n\n💊 用药原则：\n• 暴露后72小时内开始服药，越早越好\n• 需连续服药28天，不可漏服\n• 常用方案：三种抗病毒药物联合使用\n\n💊 阻断成功率：\n• 2小时内：约99%\n• 24小时内：约90%\n• 72小时内：约80%\n• 超过72小时：不推荐使用\n\n💊 注意事项：\n• 服药期间避免饮酒\n• 可能出现恶心、头晕等副作用（正常反应）\n• 服药完成后需检测确认\n• 服药期间仍需使用安全套\n\n💡 目前国内多个城市疾控中心提供PEP服务，部分医院设有专门门诊。',
        type: 'correct',
      },
      choices: [
        {
          id: 'fh_pea_1',
          text: '坚持28天服药，6周后按时检测',
          isCorrect: true,
          knowledge: {
            title: '坚持服药是关键',
            content:
              'PEP阻断成功的关键在于依从性：\n\n✅ 每天按时服药，不漏服、不停药\n✅ 28天完整疗程\n✅ 服药结束后4-6周做四代HIV检测\n✅ 12周后复查确认\n✅ 服药期间及确认前坚持使用安全套\n\n你的坚持，可能就是阻断病毒的最后防线！',
            type: 'correct',
          },
          nextNodeId: 'fh_test_positive',
          tags: ['tested', 'active_treatment'],
        },
        {
          id: 'fh_pea_2',
          text: '吃了一周觉得副作用太大就停了，反正吃了应该有点用',
          isCorrect: false,
          knowledge: {
            title: '中途停药=白吃+风险加倍',
            content:
              'PEP必须完整服用28天：\n\n❌ 中途停药的后果：\n• 无法达到阻断效果\n• 药物浓度不足，反而可能促进耐药突变\n• 等于放弃了阻断的最后机会\n\n💡 副作用是正常的：\n• 恶心、头晕、腹泻在服药初期常见\n• 通常1-2周后减轻\n• 如果副作用严重，请咨询医生调整方案，不要自行停药\n\n28天的坚持，换的是一生的安心。',
            type: 'danger',
          },
          nextNodeId: 'fh_test_positive_stop',
          tags: ['tested', 'skipped_followup'],
        },
      ],
    },

    // ========== 检测结果 - 阳性（完整服药路径）==========
    fh_test_positive: {
      id: 'fh_test_positive',
      stage: 'test_result',
      sceneTitle: '检测结果',
      narrative:
        '6周后，你按医嘱去做了检测。\n\n结果：HIV抗体阳性。\n\n你愣住了。明明吃了阻断药，为什么还是……\n\n医生解释道："阻断药成功率很高但不是100%，可能暴露时病毒量较大，或者服药时间不够早。但我要告诉你——HIV感染不等于死刑。现在医学已经非常发达，规范抗病毒治疗可以让你正常生活、正常工作、正常婚育。"',
      knowledge: {
        title: 'HIV阳性≠人生终结',
          content:
            '确诊HIV确实令人崩溃，但请记住这些事实：\n\n✅ U=U（检测不到=不传染）：规范抗病毒治疗后，病毒载量持续检测不到，不会通过性行为传染给伴侣\n✅ 正常寿命：规范治疗的HIV感染者，预期寿命与常人无异\n✅ 正常婚育：我国法律明确保护HIV感染者的婚育权利\n✅ 母婴阻断：规范抗病毒治疗+母婴阻断，成功率超过98%\n✅ 正常生活：可以正常工作、社交、运动、旅行\n\n⚠️ 前提是：规范治疗+定期复查+坦诚告知伴侣\n\n"艾滋病早已不是绝症，而是一种可控的慢性病。真正可怕的不是疾病，而是隐瞒和恐惧。"',
        type: 'info',
      },
      choices: [
        {
          id: 'fh_tp_1',
          text: '虽然害怕，但我要告诉阿杰真相，一起面对',
          isCorrect: true,
          knowledge: {
            title: '坦诚告知——对伴侣最基本的尊重和保护',
            content:
              '向伴侣坦白HIV感染，是最艰难但最重要的选择：\n\n✅ 法律要求：《艾滋病防治条例》规定，HIV感染者应将感染事实告知性伴侣\n✅ 伴侣可立即采取防护措施：使用安全套、做检测、必要时预防性用药\n✅ 坦诚后才能获得完整的家庭支持和治疗监督\n✅ 伴侣知情后，可以共同制定安全婚育方案\n\n"坦诚不是让你的人生变难，而是让两个人的力量对抗一个困难，而不是一个人对抗两个敌人。"',
            type: 'correct',
          },
          nextNodeId: 'fh_tell_honest',
          tags: ['tested', 'honest'],
        },
        {
          id: 'fh_tp_2',
          text: '不能告诉阿杰……他会离开我的。先自己治，等以后再说',
          isCorrect: false,
          knowledge: {
            title: '隐瞒HIV——法律与健康双重犯罪',
            content:
              '隐瞒HIV感染的严重后果：\n\n❌ 法律层面：\n• 《艾滋病防治条例》第38条：感染者应将感染事实告知性伴侣\n• 《民法典》第1053条：婚前隐瞒重大疾病，可申请撤销婚姻\n• 故意传播HIV，可能承担刑事责任\n\n❌ 健康层面：\n• 伴侣在不知情的情况下无防护接触，感染概率极高\n• 阿杰没有机会保护自己——这等同于剥夺他的健康权\n\n❌ 情感层面：\n• 真相迟早会暴露\n• 隐瞒带来的信任崩塌，远比疾病本身更具破坏力\n\n💡 你害怕的"他会离开"，恰恰是隐瞒后更可能发生的结果——因为隐瞒伤害的不是身体，而是信任。',
            type: 'danger',
          },
          nextNodeId: 'fh_tell_hide',
          tags: ['tested', 'hidden'],
        },
      ],
    },

    // ========== 检测结果 - 阳性（中途停药路径）==========
    fh_test_positive_stop: {
      id: 'fh_test_positive_stop',
      stage: 'test_result',
      sceneTitle: '悔之晚矣',
      narrative:
        '你中途停了阻断药，6周后的检测结果——HIV阳性。\n\n医生叹了口气："如果完整服药28天，阻断成功的概率是很高的。中途停药，等于白白浪费了72小时黄金时间。"\n\n你后悔得说不出话。但自责不能改变结果，现在需要面对现实——确诊感染，必须尽快开始规范的抗病毒治疗。',
      knowledge: {
        title: '规范抗病毒治疗——HIV感染者的新起点',
        content:
          '确诊HIV后，尽早开始抗病毒治疗（ART）至关重要：\n\n💊 治疗方案：\n• 目前推荐方案：三种药物联合（免费抗病毒药物）\n• 每天服药一次，需终身坚持\n• 定期复查病毒载量和CD4细胞计数\n\n💊 治疗效果：\n• 3-6个月内病毒载量可降至检测不到\n• CD4细胞逐渐恢复，免疫功能重建\n• 规范治疗者预期寿命与常人无异\n\n💊 国家政策：\n• HIV抗病毒药物免费提供\n• 定期随访检测免费\n• 隐私严格保护\n\n💡 "早发现、早治疗"是HIV管理的核心原则。',
        type: 'info',
      },
      nextNodeId: 'fh_premarital_skip_tested',
    },

    // ========== 告知伴侣 - 坦诚 ==========
    fh_tell_honest: {
      id: 'fh_tell_honest',
      stage: 'tell_partner',
      sceneTitle: '最难的一次对话',
      narrative:
        '你约阿杰在一个安静的咖啡馆见面。手心全是汗，心跳快到发抖。\n\n"阿杰，我有件事必须告诉你……我查出了HIV阳性。"\n\n空气凝固了。阿杰的筷子停在半空，眼神从震惊变成困惑，最后变成了一种你读不懂的复杂表情。\n\n沉默了很久，阿杰开口了："你先别怕。我去做个检测，然后我们一起去见医生。"\n\n第二天，阿杰做了HIV检测——结果是阴性。医生说因为你们在那之后没有无保护性行为，他被感染的概率很低。',
      knowledge: {
        title: '伴侣检测与防护——U=U的科学依据',
        content:
          'HIV感染者的伴侣如何保护自己：\n\n🔬 U=U（Undetectable=Untransmittable）：\n• 规范抗病毒治疗6个月以上\n• 病毒载量持续检测不到（低于检测下限）\n• 此时不会通过性行为传染给伴侣\n• 这是世界卫生组织（WHO）确认的科学事实\n\n🛡️ 伴侣防护措施：\n• 立即做HIV检测确认感染状态\n• 在感染者病毒载量未达标前，坚持使用安全套\n• 伴侣可考虑使用暴露前预防（PrEP）\n• 定期复查\n\n💡 "坦诚告知+科学防护"= 伴侣的保护伞。你不告诉他，他连保护自己的机会都没有。',
        type: 'correct',
      },
      nextNodeId: 'fh_premarital_honest',
    },

    // ========== 告知伴侣 - 隐瞒 ==========
    fh_tell_hide: {
      id: 'fh_tell_hide',
      stage: 'tell_partner',
      sceneTitle: '独自承受',
      narrative:
        '你把诊断书藏在了最深的抽屉里。开始偷偷去疾控中心领免费抗病毒药物，每天背着阿杰吃药。\n\n"你最近怎么开始吃保健品了？"阿杰问。\n"嗯……就是补充点维生素。"你笑着搪塞过去。\n\n但你的心每天都在煎熬——和阿杰的每一次亲密接触，你都心惊胆战。你知道自己应该告诉他，但你更害怕失去他。\n\n你不知道的是，隐瞒本身就是对阿杰最大的伤害。',
      knowledge: {
        title: '隐瞒HIV=剥夺伴侣的知情权和健康权',
        content:
          '隐瞒HIV对伴侣的危害：\n\n❌ 伴侣不知情→无防护→持续暴露→感染风险日积月累\n❌ 在病毒载量未控制前，每次无保护性行为都有传染风险\n❌ 伴侣没有机会做检测、没有机会保护自己\n❌ 这等同于用对方的健康为你的恐惧买单\n\n💡 数据提醒：\n• 未治疗的HIV感染者，单次无保护性行为传给伴侣的概率约0.1%-3%\n• 看似不高，但长期积累就是必然\n• 而规范治疗达到U=U后，传染风险为零\n\n"你不是在保护他，你只是让自己暂时不难堪。但他在不知情中承担的风险，远比你想象的要大。"',
        type: 'danger',
      },
      nextNodeId: 'fh_premarital_hide',
    },

    // ========== 婚前检查 - 坦诚路径 ==========
    fh_premarital_honest: {
      id: 'fh_premarital_honest',
      stage: 'premarital',
      sceneTitle: '婚检——坦诚是最好的嫁妆',
      narrative:
        '你们一起去做了婚前医学检查。因为已经知道你的情况，医生针对性地给出了专业指导：\n\n1. 你继续规范抗病毒治疗，目标是尽快达到病毒载量检测不到\n2. 阿杰做HIV检测确认阴性，可选择使用PrEP进一步降低风险\n3. 在你达到U=U后，可以安全地亲密接触\n4. 备孕需要在医生指导下进行，通过母婴阻断技术生育健康宝宝\n\n医生说："你们做了最难但最正确的事。坦诚告知+规范治疗+科学防护，HIV感染者的家庭一样可以幸福美满。"',
      knowledge: {
        title: 'HIV感染者可以合法正常婚育',
        content:
          '权威法律与医学保障：\n\n⚖️ 法律保障：\n• 我国法律不禁止HIV感染者结婚生育\n• 《艾滋病防治条例》保护感染者婚姻、就业、医疗等合法权益\n• 《民法典》规定的是"告知义务"，而非"禁止婚育"\n\n🏥 医学保障：\n• U=U后可安全亲密接触\n• 母婴阻断技术成熟：\n  - 孕前开始抗病毒治疗\n  - 孕期持续监测病毒载量\n  - 分娩时选择合适方式\n  - 新生儿出生后预防性用药\n  - 不推荐HIV阳性妈妈母乳喂养（可用配方奶替代）\n• 母婴阻断成功率超过98%\n\n💡 "HIV感染者可以成为好配偶、好父母"——这不是安慰，而是医学事实。',
        type: 'correct',
      },
      choices: [
        {
          id: 'fh_pm_h_1',
          text: '按医生方案坚持治疗，等达到U=U后再备孕',
          isCorrect: true,
          knowledge: {
            title: 'HIV女性安全备孕完整方案',
            content:
              'HIV阳性女性安全备孕的科学步骤：\n\n📋 孕前准备：\n• 规范抗病毒治疗，病毒载量持续检测不到\n• CD4细胞计数正常\n• 评估目前用药是否适合孕期（部分药物需调整）\n\n📋 备孕方式：\n• 在医生指导下，选择排卵期自然受孕\n• 确保病毒载量检测不到，传染风险极低\n• 也可选择辅助生殖技术\n\n📋 孕期管理：\n• 继续抗病毒治疗（使用孕期安全药物）\n• 每月监测病毒载量\n• 孕晚期加强监测\n\n📋 分娩与产后：\n• 根据病毒载量选择分娩方式\n• 新生儿出生后6-12小时内开始预防性用药\n• 使用配方奶喂养\n• 新生儿定期随访至18月龄确认感染状态\n\n✅ 规范操作下，你完全有能力生育健康宝宝！',
            type: 'correct',
          },
          nextNodeId: 'fh_prepregnancy_honest',
          tags: ['honest', 'premarital_check'],
        },
        {
          id: 'fh_pm_h_2',
          text: '治疗的事先放一放，现在生活稳定了再说备孕',
          isCorrect: false,
          knowledge: {
            title: '拖延治疗=增加传播风险',
            content:
              'HIV感染不会"等你想治了再恶化"，拖延只会让情况更复杂：\n\n⚠️ 不治疗=病毒持续复制=免疫力逐渐下降\n⚠️ 病毒载量居高不下=传染伴侣的风险增加\n⚠️ 错过最佳治疗时机=后续治疗难度加大\n\n💡 HIV抗病毒治疗越早开始效果越好。早治疗、早达标（U=U），才能安全备孕、守护家人。拖延不是"稳妥"，而是给风险留了门。',
            type: 'warning',
          },
          nextNodeId: 'fh_prepregnancy_delay',
          tags: ['honest', 'delayed_treatment'],
        },
      ],
    },

    // ========== 婚前检查 - 隐瞒路径 ==========
    fh_premarital_hide: {
      id: 'fh_premarital_hide',
      stage: 'premarital',
      sceneTitle: '逃避婚检',
      narrative:
        '婚期临近，阿杰提议去做婚前检查。你心里一慌——婚检必查艾梅乙，万一查出来阿杰就知道了。\n\n"我最近体检过，没什么问题。婚检就免了吧。"你故作轻松地说。\n\n阿杰有些犹豫，但最终被你说服了。你们跳过了婚检。\n\n你松了口气——但这口气松得太早。跳过婚检不是逃避了问题，而是关闭了最重要的发现窗口。',
      choices: [
        {
          id: 'fh_pm_hd_1',
          text: '反正快结婚了，直接开始备孕吧',
          isCorrect: false,
          knowledge: {
            title: 'HIV+隐瞒+无指导备孕=最危险组合',
            content:
              'HIV阳性未告知+无医学指导+直接备孕的极端风险：\n\n❌ 阿杰可能被感染——每次无保护接触都是暴露\n❌ 母婴传播风险极高——未经抗病毒治疗的HIV妈妈，母婴传播率25%-45%\n❌ 宝宝感染HIV——终身需要服药\n❌ 真相终将暴露——孕期产检必查艾梅乙\n\n⚠️ 最关键的数据对比：\n• 不做任何母婴阻断：传播率25%-45%\n• 规范母婴阻断：传播率<2%\n• 差距如此巨大，全在于"是否提前知晓、科学干预"',
            type: 'danger',
          },
          nextNodeId: 'fh_prepregnancy_hide',
          tags: ['hidden', 'skipped_check', 'direct_pregnancy'],
        },
        {
          id: 'fh_pm_hd_2',
          text: '虽然跳过了婚检，但备孕前我去做个检查',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，犹未为晚',
            content:
              '跳过婚检虽然可惜，但孕前检查是另一个重要关口：\n\n✅ 孕前检查同样包含艾梅乙筛查\n✅ 可以评估你当前的病毒载量和CD4水平\n✅ 可以获得科学备孕指导\n✅ 至少让阿杰有机会做检测和保护\n\n"重要的不是之前错过了什么，而是现在开始做正确的事。"',
            type: 'info',
          },
          nextNodeId: 'fh_prepregnancy_late_check',
          tags: ['hidden', 'late_check'],
        },
      ],
    },

    // ========== 婚前检查 - 未检测路径 ==========
    fh_premarital_skip: {
      id: 'fh_premarital_skip',
      stage: 'premarital',
      sceneTitle: '婚检机会',
      narrative:
        '婚期将近，社区通知免费婚检。你心里隐隐不安——那晚之后你一直没去检查……\n\n"去做个婚检吧，也对彼此负责。"阿杰说。',
      choices: [
        {
          id: 'fh_pm_s_1',
          text: '去做婚检，正好全面查一下',
          isCorrect: true,
          knowledge: {
            title: '婚检是发现HIV的关键关口',
            content:
              'HIV感染后可多年无症状，但一直有传染性：\n\n• 潜伏期平均8-10年，期间外表完全健康\n• 只有血液检测才能发现\n• 婚检中的HIV筛查是主动发现的唯一机会\n• 早发现=早治疗=正常寿命+保护伴侣\n\n婚检不是负担，是保障！',
            type: 'correct',
          },
          nextNodeId: 'fh_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'fh_pm_s_2',
          text: '不用查，我身体好着呢',
          isCorrect: false,
          knowledge: {
            title: '"感觉健康"≠没有感染',
            content:
              'HIV最狡猾之处——长期无症状：\n\n• 潜伏期8-10年，期间可完全无症状\n• 你感觉健康，但病毒在持续破坏免疫系统\n• 每一天不查，就是让病毒多破坏一天\n• 每一次无保护接触，都是对伴侣的暴露\n\n主动筛查是唯一的确定性。',
            type: 'danger',
          },
          nextNodeId: 'fh_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚前检查 - 未检测路径（跳过复查）==========
    fh_premarital_skip_tested: {
      id: 'fh_premarital_skip_tested',
      stage: 'premarital',
      sceneTitle: '孕前检查关口',
      narrative:
        '你中途停了阻断药后确诊了HIV，但一直没告诉阿杰。婚期将近，阿杰提议去做婚检。\n\n你知道婚检会查出HIV……',
      choices: [
        {
          id: 'fh_pm_st_1',
          text: '去做婚检，面对现实',
          isCorrect: true,
          knowledge: {
            title: '婚检帮你面对真相',
            content:
              '婚检可以帮助你：\n• 正式确诊和评估病情\n• 让阿杰做检测\n• 获得专业婚育指导\n• 开始规范治疗\n\n早晚要面对，早面对早解决。',
            type: 'correct',
          },
          nextNodeId: 'fh_premarital_check_discover',
          tags: ['tested_late', 'premarital_check'],
        },
        {
          id: 'fh_pm_st_2',
          text: '不想去，怕被查出来',
          isCorrect: false,
          knowledge: {
            title: '逃避婚检=放弃保护',
            content:
              '跳过婚检意味着：\n• 阿杰继续在不知情中暴露\n• 你自己无法获得婚育指导\n• 孕期产检也会查出\n• 问题不会因为逃避而消失\n\n每一次拒绝检查，都是在拿全家的健康冒险。',
            type: 'warning',
          },
          nextNodeId: 'fh_premarital_skip_all',
          tags: ['skipped_check', 'ignored'],
        },
      ],
    },

    // ========== 婚检发现感染 ==========
    fh_premarital_check_discover: {
      id: 'fh_premarital_check_discover',
      stage: 'premarital',
      sceneTitle: '婚检意外发现',
      narrative:
        '婚检结果出来了——你的HIV抗体阳性。\n\n阿杰就坐在旁边，看着你的报告。他的表情从困惑变成了震惊。\n\n"这是怎么回事？"他问。',
      choices: [
        {
          id: 'fh_pm_cd_1',
          text: '"我有件事必须坦白……那晚我犯了错，之后我一直害怕，但没敢去面对。对不起。"',
          isCorrect: true,
          knowledge: {
            title: '迟来的坦诚也是勇气',
            content:
              '虽然真相来得晚了，但坦诚仍然是最正确的选择：\n\n✅ 阿杰需要立即做HIV检测\n✅ 如未感染，可使用PrEP预防\n✅ 你可以开始规范的抗病毒治疗\n✅ 坦诚后才能获得完整的家庭支持\n\n"认错不容易，但比继续隐瞒好一万倍。"',
            type: 'correct',
          },
          nextNodeId: 'fh_prepregnancy_honest_late',
          tags: ['tested_late', 'honest_late'],
        },
        {
          id: 'fh_pm_cd_2',
          text: '"我也不知道怎么会这样……可能是以前的事吧"',
          isCorrect: false,
          knowledge: {
            title: '模糊化处理=给伴侣设陷阱',
            content:
              '含糊其辞的危害：\n\n❌ 阿杰不知道自己的暴露风险\n❌ 无法判断是否需要检测\n❌ 隐瞒高危细节=隐瞒传播风险\n\n完整的真相=完整的防护。让伴侣知情，他才能保护自己。',
            type: 'danger',
          },
          nextNodeId: 'fh_prepregnancy_half_hide',
          tags: ['tested_late', 'half_hidden'],
        },
      ],
    },

    // ========== 完全跳过婚检 ==========
    fh_premarital_skip_all: {
      id: 'fh_premarital_skip_all',
      stage: 'premarital',
      sceneTitle: '跳过婚检',
      narrative:
        '你们跳过了婚检，顺利领了证。你安慰自己："没事的。"\n\n婚后你们很快开始备孕，两个月后你怀孕了。\n\n没有人知道，HIV正在你体内悄悄破坏免疫系统，同时可能通过母婴传播影响你的宝宝……',
      knowledge: {
        title: '跳过婚检=放弃主动权',
        content:
          '婚前检查是发现HIV感染的黄金窗口：\n\n• 跳过婚检→孕前不知道感染→无防护备孕\n• HIV母婴传播率（未阻断）：25%-45%\n• 规范阻断后：<2%\n\n这个差距，全在于"是否提前知晓"。',
        type: 'warning',
      },
      nextNodeId: 'fh_prenatal_skip_all',
    },

    // ========== 孕前检查 - 坦诚路径 ==========
    fh_prepregnancy_honest: {
      id: 'fh_prepregnancy_honest',
      stage: 'prepregnancy',
      sceneTitle: '科学备孕',
      narrative:
        '经过8个月的规范抗病毒治疗，你的病毒载量已经持续检测不到——达到了U=U标准！\n\n医生评估后认为可以开始备孕。"你的治疗依从性很好，病毒载量检测不到，CD4恢复正常。在这种状态下，通过自然受孕方式传给阿杰的风险极低，母婴阻断后传给宝宝的风险小于2%。"\n\n阿杰握着你的手："我们一起。"\n\n两个月后，你怀孕了！',
      knowledge: {
        title: 'U=U——HIV感染者婚育的里程碑',
        content:
          'U=U（检测不到=不传染）是改变HIV感染者命运的科学发现：\n\n🔬 科学依据：\n• 三项大规模临床研究（HPTN052、PARTNER、Opposites Attract）证实\n• 病毒载量持续检测不到的HIV感染者，不会通过性行为传播HIV\n• 零传播案例——数万次性行为中无一例传播\n\n🔬 达标标准：\n• 规范抗病毒治疗6个月以上\n• 连续两次病毒载量检测低于检测下限（通常<50 copies/mL）\n• 两次检测间隔3个月\n\n✅ 达到U=U后：\n• 可安全进行亲密接触\n• 可在医生指导下自然受孕\n• 不影响正常社交、工作、生活\n\n💡 U=U不是口号，是经过严格科学验证的事实。',
        type: 'correct',
      },
      nextNodeId: 'fh_prenatal_honest',
    },

    // ========== 孕前检查 - 坦诚（晚发现路径）==========
    fh_prepregnancy_honest_late: {
      id: 'fh_prepregnancy_honest_late',
      stage: 'prepregnancy',
      sceneTitle: '重建信任',
      narrative:
        '虽然真相来得晚了，但你选择了坦诚。阿杰去做HIV检测——结果阴性。\n\n阿杰沉默了很久，最后说："我需要时间。但你最终告诉了我，这很重要。"\n\n你开始规范抗病毒治疗，医生说6-8个月后有望达到U=U标准。你们约定，等治疗达标后再考虑要孩子。\n\n信任的重建需要时间，但至少你们在同一个方向上努力。',
      knowledge: {
        title: '晚发现≠晚治疗',
        content:
          '即使发现较晚，开始规范治疗仍然可以取得良好效果：\n\n✅ 抗病毒治疗3-6个月内，多数患者病毒载量可降至检测不到\n✅ CD4细胞逐渐恢复\n✅ 达到U=U后可安全婚育\n✅ 预期寿命与常人无异\n\n"晚一步"总好过"不迈步"。开始治疗的那一刻，就是新生活的起点。',
        type: 'correct',
      },
      nextNodeId: 'fh_prenatal_honest',
    },

    // ========== 孕前检查 - 半隐瞒路径 ==========
    fh_prepregnancy_half_hide: {
      id: 'fh_prepregnancy_half_hide',
      stage: 'prepregnancy',
      sceneTitle: '模糊的真相',
      narrative:
        '你没有完全坦白高危接触的事，只是含糊地说"可能以前就有了"。阿杰半信半疑，但也没有深究。\n\n你开始治疗，但阿杰一直没去做检测。你们很快开始备孕——你觉得"吃药了应该没事了吧"。',
      knowledge: {
        title: '不完整的真相=不完整的防护',
        content:
          '半隐瞒导致半防护：\n\n⚠️ 阿杰没有做HIV检测——他不知道自己的感染状态\n⚠️ 阿杰没有使用安全套或PrEP——他持续暴露\n⚠️ 你没有达到U=U就备孕——母婴传播风险仍在\n⚠️ 不完整的沟通=防护链条有漏洞\n\n完整的真相=完整的防护。',
        type: 'warning',
      },
      nextNodeId: 'fh_prenatal_half_hide',
    },

    // ========== 孕前检查 - 隐瞒路径 ==========
    fh_prepregnancy_hide: {
      id: 'fh_prepregnancy_hide',
      stage: 'prepregnancy',
      sceneTitle: '隐瞒下的备孕',
      narrative:
        '你隐瞒了HIV感染，和阿杰开始备孕。没有医生指导，没有评估病毒载量，阿杰也不知道需要保护自己。\n\n你每天偷偷吃药，心里抱着侥幸："药吃了应该就没事了吧……"\n\n两个月后你怀孕了。你既兴奋又恐惧。',
      knowledge: {
        title: 'HIV未控制就备孕=极高母婴传播风险',
        content:
          'HIV女性在未控制病毒载量时备孕的风险：\n\n❌ 病毒载量未知→不知道传染风险多高\n❌ 母婴传播率25%-45%（未阻断情况下）\n❌ 阿杰持续暴露→可能被感染\n❌ 宝宝可能终身携带HIV\n\n而规范阻断后母婴传播率<2%。差距如此之大，全在于"是否科学干预"。',
        type: 'danger',
      },
      nextNodeId: 'fh_prenatal_hide',
    },

    // ========== 孕前检查 - 补查路径 ==========
    fh_prepregnancy_late_check: {
      id: 'fh_prepregnancy_late_check',
      stage: 'prepregnancy',
      sceneTitle: '孕前补查',
      narrative:
        '虽然跳过了婚检，但你决定去做孕前检查。结果显示HIV阳性。\n\n这一次，你没有再犹豫。你告诉了阿杰真相——关于那晚的高危接触，关于你一直以来的隐瞒和恐惧。\n\n阿杰哭了。但最后他说："我难过的是你不信任我。不过至少你现在说了。"',
      choices: [
        {
          id: 'fh_ppg_lc_1',
          text: '和阿杰一起去看医生，制定治疗方案和备孕计划',
          isCorrect: true,
          knowledge: {
            title: '坦诚之后，科学跟上',
            content:
              '孕前发现HIV后的科学应对：\n\n1️⃣ 立即开始规范抗病毒治疗\n2️⃣ 阿杰做HIV检测+必要时使用PrEP\n3️⃣ 等病毒载量达标后再备孕\n4️⃣ 孕期做好母婴阻断\n\n虽然隐瞒让人遗憾，但最终选择坦诚和科学，仍然可以守护家庭！',
            type: 'correct',
          },
          nextNodeId: 'fh_prenatal_honest',
          tags: ['honest_late', 'late_check'],
        },
        {
          id: 'fh_ppg_lc_2',
          text: '虽然查出来了，但害怕阿杰被歧视，不想让他去检测',
          isCorrect: false,
          knowledge: {
            title: '伴侣必须同步检测！',
            content:
              'HIV感染后伴侣检测是必须的，不能因为"怕歧视"就跳过：\n\n⚠️ 阿杰可能已经被感染——不检测就不知道\n⚠️ 如果阿杰也感染了却不治疗，病情会持续恶化\n⚠️ 阿杰若未感染，可以使用PrEP（暴露前预防）保护自己\n\n💡 医疗信息严格保密，检测结果仅本人可知。保护隐私和做好防护不矛盾——两者都要！不让伴侣检测，不是在保护他，而是在害他。',
            type: 'warning',
          },
          nextNodeId: 'fh_prenatal_honest_no_partner_check',
          tags: ['honest_late', 'no_partner_check'],
        },
      ],
    },

    // ========== 孕前检查 - 拖延治疗路径 ==========
    fh_prepregnancy_delay: {
      id: 'fh_prepregnancy_delay',
      stage: 'prepregnancy',
      sceneTitle: '治疗拖延',
      narrative:
        '你虽然知道自己HIV阳性，但总觉得"先不急"，没认真做抗病毒治疗。日子一天天过去，你意外发现自己怀孕了——没有提前评估病毒载量，没有调整孕期安全用药，阿杰也没做过检测。',
      choices: [
        {
          id: 'fh_ppg_d_1',
          text: '立刻去医院，全面评估病情并启动母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '意外怀孕也要第一时间干预',
            content:
              '即使意外怀孕，只要立即开始规范治疗，仍然可以大幅降低母婴传播风险：\n\n✅ 立即启动/恢复抗病毒治疗\n✅ 评估病毒载量和CD4计数\n✅ 让阿杰做HIV检测\n✅ 制定分娩和新生儿阻断方案\n\n💡 关键不是"有没有提前准备"，而是"发现后立刻行动"。HIV母婴阻断成功率>98%，前提是认真执行每一步。',
            type: 'correct',
          },
          nextNodeId: 'fh_prenatal_honest',
          tags: ['honest', 'late_start'],
        },
        {
          id: 'fh_ppg_d_2',
          text: '怀孕了就顺其自然吧，产后再治疗也不迟',
          isCorrect: false,
          knowledge: {
            title: '产后再治？太晚了！',
            content:
              'HIV母婴阻断的关键窗口在孕期和分娩时，产后治疗无法挽回：\n\n❌ 孕期不治疗=病毒持续传给胎儿\n❌ 分娩时不干预=产道暴露感染风险极高\n❌ 新生儿不预防性用药=感染概率达25%-45%\n\n⚠️ 对比数据：不做阻断母婴传播率25%-45%，规范阻断后不到2%！孕期是唯一能主动保护宝宝的机会，错过就无法弥补。',
            type: 'danger',
          },
          nextNodeId: 'fh_prenatal_hide',
          tags: ['hidden', 'passive'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚但伴侣未查 ==========
    fh_prenatal_honest_no_partner_check: {
      id: 'fh_prenatal_honest_no_partner_check',
      stage: 'prenatal',
      sceneTitle: '伴侣感染发现',
      narrative:
        '你按照医嘱规范产检，但在孕24周时，阿杰因为持续发烧去医院检查——HIV阳性。\n\n医生说："如果当初让阿杰也做了检测，完全可以更早发现、更早治疗。"',
      choices: [
        {
          id: 'fh_pn_hnpc_1',
          text: '让阿杰立即开始抗病毒治疗，重新制定家庭防护方案',
          isCorrect: true,
          knowledge: {
            title: '夫妻同查同治是基本原则',
            content:
              'HIV一方确诊，另一方必须同步检测和治疗：\n\n✅ 阿杰立即启动抗病毒治疗，越早越好\n✅ 你继续规范产检和母婴阻断\n✅ 新生儿出生后按规范预防性用药\n✅ 产后全家定期随访\n\n💡 "早发现早治疗"对谁都适用。虽然晚了，但现在行动仍然有意义。',
            type: 'correct',
          },
          nextNodeId: 'fh_prenatal_honest',
          tags: ['honest', 'partner_treated'],
        },
        {
          id: 'fh_pn_hnpc_2',
          text: '先不管阿杰了，保住孩子最重要',
          isCorrect: false,
          knowledge: {
            title: '忽视伴侣=忽视家庭安全',
            content:
              '只关注自己不管伴侣，家庭防护永远有漏洞：\n\n❌ 阿杰不治疗=免疫力持续下降=严重健康风险\n❌ 日常生活仍有传播风险\n❌ 孩子出生后，未治疗的父亲也是风险源\n\n💡 家庭是一个整体，只做"一半防护"不如不做。夫妻同查同治，才能真正守护全家。',
            type: 'warning',
          },
          nextNodeId: 'fh_prenatal_honest',
          tags: ['honest', 'partner_ignored'],
        },
      ],
    },

    // ========== 孕期产检 - 坦诚路径（完美路径）==========
    fh_prenatal_honest: {
      id: 'fh_prenatal_honest',
      stage: 'prenatal',
      sceneTitle: '守护新生命',
      narrative:
        '孕期的每一天，你都严格遵守医嘱：按时服药、定期复查、监测病毒载量。\n\n每次产检，医生都会确认你的病毒载量是否持续检测不到。好消息是——你的治疗效果非常好，病毒载量一直保持在检测不到的水平。\n\n终于到了分娩那天。宝宝出生后，立即开始预防性用药。医生选择了剖宫产以进一步降低母婴传播风险。\n\n"宝宝很健康。"医生说，"按照规范阻断方案，宝宝感染HIV的概率不到2%。"',
      knowledge: {
        title: 'HIV母婴阻断全流程',
        content:
          'HIV母婴阻断是成熟有效的医学技术：\n\n🏥 孕前：\n• 规范抗病毒治疗，达到U=U标准\n• 评估并调整适合孕期的药物\n\n🏥 孕期：\n• 继续抗病毒治疗\n• 每月监测病毒载量\n• 孕晚期加强监测\n\n🏥 分娩：\n• 病毒载量检测不到：可选择顺产\n• 病毒载量可检测：建议剖宫产\n• 新生儿出生后6-12小时内开始预防性用药\n\n🏥 产后：\n• 新生儿预防性用药4-6周\n• 使用配方奶喂养（不推荐母乳喂养）\n• 新生儿定期随访至18月龄确认感染状态\n\n✅ 规范阻断成功率 > 98%！',
        type: 'correct',
      },
      nextNodeId: 'fh_ending_perfect',
    },

    // ========== 孕期产检 - 半隐瞒路径 ==========
    fh_prenatal_half_hide: {
      id: 'fh_prenatal_half_hide',
      stage: 'prenatal',
      sceneTitle: '孕期的隐患',
      narrative:
        '你怀孕了，去做产检。艾梅乙筛查是必查项目——HIV阳性。\n\n医生询问你的治疗情况和伴侣状况，你含糊地说"在治疗了"。\n\n"你先生必须来做检测。"医生严肃地说。\n\n阿杰被叫来医院做检测——结果阴性，但他被吓坏了。"你怎么会有HIV？你为什么不告诉我？"',
      choices: [
        {
          id: 'fh_pn_hh_1',
          text: '坦白一切，全力配合医生做母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '孕期积极阻断仍可有效保护宝宝',
            content:
              '孕期发现HIV，立即采取措施仍可大幅降低传播风险：\n\n✅ 立即开始/继续规范抗病毒治疗\n✅ 阿杰做检测+使用PrEP\n✅ 孕晚期加强病毒载量监测\n✅ 新生儿出生后做好预防性用药\n\n虽然错过了最佳时机，但积极应对仍然是对宝宝最大的守护。',
            type: 'correct',
          },
          nextNodeId: 'fh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fh_pn_hh_2',
          text: '无法面对，想逃避',
          isCorrect: false,
          knowledge: {
            title: '孕期逃避=拿宝宝的健康冒险',
            content:
              '孕期继续逃避的后果：\n\n❌ 母婴阻断不完整→宝宝感染HIV风险极高\n❌ 阿杰可能已被感染\n❌ 宝宝出生后无法获得最佳干预\n❌ 产后哺乳等无正确指导\n\n宝宝的健康经不起你的逃避。',
            type: 'danger',
          },
          nextNodeId: 'fh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 隐瞒路径 ==========
    fh_prenatal_hide: {
      id: 'fh_prenatal_hide',
      stage: 'prenatal',
      sceneTitle: '纸包不住火',
      narrative:
        '孕期产检——HIV筛查阳性。\n\n更糟糕的是，阿杰也被查出HIV阳性。他在不知情的情况下，被你传染了。\n\n阿杰拿着检测报告，眼泪无声地滑落："你早就知道了，是不是？你为什么不告诉我？"\n\n你的沉默就是回答。',
      knowledge: {
        title: '隐瞒HIV导致伴侣感染——最惨痛的代价',
        content:
          'HIV隐瞒导致伴侣感染的真实后果：\n\n💔 阿杰被感染——终身需要服药\n💔 宝宝面临HIV母婴传播风险\n💔 信任彻底崩塌\n💔 法律层面：明知感染而故意传播，可能承担刑事责任\n\n💡 这一切，只需一次坦诚就可以避免。U=U后不会传染，但前提是——你要告诉他，你要开始治疗。',
        type: 'danger',
      },
      choices: [
        {
          id: 'fh_pn_hd_1',
          text: '彻底认错，全力配合治疗和母婴阻断',
          isCorrect: true,
          knowledge: {
            title: '亡羊补牢，全力以赴',
            content:
              '虽然后果已经造成，但积极治疗仍有希望：\n\n✅ 你和阿杰都开始规范抗病毒治疗\n✅ 宝宝做好母婴阻断\n✅ 用行动证明你的悔意\n\n过去的错误无法撤销，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'fh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fh_pn_hd_2',
          text: '无法面对，选择逃避',
          isCorrect: false,
          knowledge: {
            title: '逃避的最终代价',
            content:
              '孕期逃避意味着：\n❌ 宝宝可能感染HIV\n❌ 阿杰治疗延误\n❌ 你自己病情恶化\n❌ 家庭无法维系\n\n勇敢面对是唯一正确的路。',
            type: 'danger',
          },
          nextNodeId: 'fh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 孕期产检 - 完全跳过检查路径 ==========
    fh_prenatal_skip_all: {
      id: 'fh_prenatal_skip_all',
      stage: 'prenatal',
      sceneTitle: '孕期真相',
      narrative:
        '第一次产检，艾梅乙筛查——HIV阳性。你的病毒载量很高，CD4计数偏低。\n\n医生面色凝重："你之前不知道自己感染吗？你先生需要立即检测。"\n\n阿杰就坐在旁边，满脸茫然。所有的隐瞒在这一刻被彻底撕开……',
      choices: [
        {
          id: 'fh_pn_sa_1',
          text: '坦白一切，全力配合医生',
          isCorrect: true,
          knowledge: {
            title: '从现在开始做正确的事',
            content:
              '孕期发现虽晚，但积极治疗仍可降低风险：\n\n1️⃣ 立即开始抗病毒治疗\n2️⃣ 阿杰紧急检测\n3️⃣ 做好母婴阻断\n4️⃣ 新生儿预防性用药\n\n过去无法改变，但现在的选择决定未来。',
            type: 'correct',
          },
          nextNodeId: 'fh_ending_normal',
          tags: ['honest_very_late'],
        },
        {
          id: 'fh_pn_sa_2',
          text: '无法面对，想要逃避',
          isCorrect: false,
          knowledge: {
            title: '宝宝的健康经不起逃避',
            content:
              '孕期逃避的后果：\n❌ 宝宝感染HIV风险25%-45%\n❌ 阿杰健康持续暴露\n❌ 你自己的病情恶化\n\n请为宝宝勇敢一次。',
            type: 'danger',
          },
          nextNodeId: 'fh_ending_regret',
          tags: ['hidden_to_end'],
        },
      ],
    },

    // ========== 结局：完美 ==========
    fh_ending_perfect: {
      id: 'fh_ending_perfect',
      stage: 'ending',
      sceneTitle: '🌟 坦诚守护，阖家安康',
      narrative:
        '宝宝6个月时的随访结果——HIV检测阴性！\n\n阻断成功了！你的宝宝是健康的！\n\n阿杰抱着宝宝，看着你说："从你告诉我的那天起，我就知道我们一起可以面对任何事。"\n\n回望这段路：高危后的恐惧、72小时内争取阻断的决断、确诊后的崩溃、向阿杰坦白的勇气、规范治疗的坚持、孕期阻断的严格……每一步，你都选择了最难但最正确的路。\n\n而正是这些选择，证明了：HIV感染不等于人生终结。U=U让你安全亲密，母婴阻断让你成为健康的妈妈，坦诚让你们的爱更加坚固。',
      isEnding: true,
      endingType: 'perfect',
      endingTitle: '坦诚守护，阖家安康',
      endingNarrative:
        '全程主动检测、坦诚告知、规范治疗、科学母婴阻断。你深刻践行了"U=U"和"艾梅乙可防可治"理念，守护了伴侣与孩子的健康，维护了家庭的信任与和睦。',
      knowledge: {
        title: '完美结局的核心启示',
        content:
          '你的选择证明了：\n\n✅ HIV可防可控——72小时阻断药、规范抗病毒治疗、U=U\n✅ HIV感染者可以正常婚育——法律保障、医学成熟\n✅ 母婴阻断成功率>98%——你完全可以生育健康宝宝\n✅ 坦诚是最好的守护——给伴侣知情权和保护权\n✅ U=U不是口号，是科学事实——检测不到=不传染\n\n🌟 记住：疾病不可怕，隐瞒和恐惧才是最大的敌人。坦诚+科学+坚持，就是守护家庭的最强力量！',
        type: 'correct',
      },
    },

    // ========== 结局：普通 ==========
    fh_ending_normal: {
      id: 'fh_ending_normal',
      stage: 'ending',
      sceneTitle: '⚠️ 心存侥幸，暗藏隐患',
      narrative:
        '虽然最终选择了积极治疗和母婴阻断，但因为发现较晚、信任受损，你需要花更长时间修复一切。\n\n宝宝出生后的预防性用药完成了，但仍需定期随访到18月龄才能确认。阿杰开始了抗病毒治疗，你们一起面对这段艰难的路。\n\n阿杰说："我不怪你生病，我难过的是你没有第一时间相信我。但我会陪你走下去。"',
      isEnding: true,
      endingType: 'normal',
      endingTitle: '心存侥幸，暗藏隐患',
      endingNarrative:
        '存在隐瞒和拖延，虽未造成最坏结果，但增加了治疗难度和情感伤害。及时补救仍可守护家庭，但信任的修复需要时间和行动。',
      knowledge: {
        title: '普通结局的警示',
        content:
          '你的经历提醒所有人：\n\n⚠️ 隐瞒增加一切风险——发现越晚，干预空间越小\n⚠️ 信任需要勇气维护——早坦诚比晚坦白好一万倍\n⚠️ 但亡羊补牢犹未为晚——积极治疗仍可有效控制\n\n📌 补救建议：\n• 宝宝完成全部随访\n• 你和阿杰坚持规范治疗\n• 用持续的行动重建信任\n\n每一个现在开始做正确选择的时刻，都是对家庭最好的守护。',
        type: 'warning',
      },
    },

    // ========== 结局：遗憾 ==========
    fh_ending_regret: {
      id: 'fh_ending_regret',
      stage: 'ending',
      sceneTitle: '💔 隐瞒致险，家庭受损',
      narrative:
        '持续隐瞒的恶果终于爆发——\n\n阿杰被确诊HIV阳性。因为不知情，他从未保护过自己。\n\n宝宝出生后，预防性用药启动较晚，需要在更长时间内密切监测。每一次等待检测结果的日子都是煎熬。\n\n当阿杰得知你早已知情却选择隐瞒时，他什么也没说，只是默默收拾了行李。\n\n你抱着刚出生的宝宝，独自坐在空荡荡的房间里。这一切本可以不同……',
      isEnding: true,
      endingType: 'regret',
      endingTitle: '隐瞒致险，家庭受损',
      endingNarrative:
        '高危后逃避检查、刻意隐瞒HIV感染，导致伴侣被感染、宝宝面临HIV风险、婚恋信任彻底破裂。这一切的根源，不是疾病本身，而是隐瞒与侥幸。',
      knowledge: {
        title: '遗憾结局的核心反思——永远不晚的正向科普',
        content:
          '这个结局最大的悲剧在于——它是完全可避免的：\n\n🟢 如果高危后72小时内服用阻断药 → 可能完全阻断感染\n🟢 如果确诊后坦诚告知 → 伴侣获得保护，不会感染\n🟢 如果参加婚检 → 提前发现，科学指导\n🟢 如果规范治疗+母婴阻断 → 宝宝感染风险<2%\n\n💡 正向科普——现在开始仍然有希望：\n• HIV可防可控——规范抗病毒治疗可长期稳定\n• U=U——检测不到=不传染，可正常生活婚育\n• 母婴阻断成功率>98%\n• 国家免费提供抗病毒药物和随访\n• 法律保障HIV感染者婚育权利\n\n记住：疾病不是悲剧，隐瞒和侥幸才是。选择坦诚和科学，永远不晚。',
        type: 'danger',
      },
    },
  },
};
