export const vehicles = [
  {
    id: "model-y",
    eyebrow: "纯电效率型 SUV",
    name: "Tesla Model Y",
    short: "以软件、三电效率与充电闭环构成产品护城河。",
    advantages: ["FSD", "三电系统", "充电闭环"],
    exterior: "/assets/benchmark/model-y-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/model-y.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/model-y-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/model-y-01.jpg", "/assets/benchmark/cockpit/model-y-02.jpg"],
    sensors: "/assets/benchmark/model-y-sensors.jpg",
    hardwareRows: [["视觉", "8 个车外摄像头"], ["激光雷达", "未采用"], ["毫米波雷达", "当前车型未统一披露"], ["近距感知", "随批次与地区配置"], ["驾驶员监测", "驾驶室摄像头"]],
    positioning: "面向重视纯电效率、软件体验与补能便利的家庭用户。",
    cockpitHeadline: "一块中控屏串联驾驶信息、车控与远程服务。",
    cockpitText: "16 英寸中央显示屏与 8 英寸后排屏承担主要交互；中控屏、语音、App 与 OTA 构成统一入口，并覆盖哨兵、爱犬与露营等场景。",
    cockpitHighlights: ["集中式显示与操作", "语音、App 与 OTA 持续更新", "哨兵、爱犬与露营场景"],
    adas: "主动巡航、辅助转向、导航辅助和泊车能力按配置、地区与软件状态开放；中央屏持续显示目标、车道、规划轨迹与当前系统状态。",
    adasFunctions: ["主动巡航与辅助转向", "导航辅助驾驶", "自动泊车与召唤"],
    perceptionSummary: "车外摄像头覆盖前向、侧向和后向道路环境，驾驶室摄像头判断驾驶员注意力。车辆不以激光雷达作为主要感知来源，因此摄像头可见度管理非常关键。",
    specs: ["2138 L 储物空间", "250 kW 峰值充电", "视觉优先路线"],
    coverage: ["高速与城市辅助驾驶", "自动泊车与召唤", "哨兵 / 爱犬 / 露营模式", "App 远程控制与整车 OTA"],
    platform: "公开路线以视觉神经网络、规划模型和车端 FSD 计算平台为核心；具体硬件代际随生产批次与地区配置变化。",
    computeMedia: {
      image: "/assets/benchmark/compute/model-y-fsd-chip.jpg",
      alt: "Tesla FSD 车载计算机双芯片主板",
      label: "车载计算硬件",
      caption: "FSD 车载计算机采用双处理器与多路摄像头接口。具体硬件代际随生产批次和交付地区变化。",
      sourceLabel: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tesla_UBQ01B0_FSD_Chip_-_20240121_(cropped).jpg",
    },
    driveMedia: {
      poster: "/assets/benchmark/model-y-exterior.jpg",
      alt: "Tesla Model Y 道路行驶画面",
      label: "辅助驾驶实车表现",
      caption: "公开演示用于观察目标识别、车道关系、路径规划与驾驶员监督信息如何同时呈现。",
      sourceLabel: "Tesla 官方演示",
      sourceUrl: "https://www.youtube.com/watch?v=TUDiG7PcLBs",
      videoEmbed: "https://www.youtube-nocookie.com/embed/TUDiG7PcLBs?rel=0",
    },
    routeCondition: "成立条件是摄像头可见性、数据规模与持续 OTA；镜头污染、低能见度和视觉边界需要明确降级。",
  },
  {
    id: "m9",
    eyebrow: "全景智慧旗舰 SUV",
    name: "问界 M9",
    short: "用全舱硬件、华为生态与多传感器智驾建立旗舰体验。",
    advantages: ["全舱硬件", "华为生态", "多传感器智驾"],
    exterior: "/assets/benchmark/m9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/m9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/m9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/m9-01.jpg", "/assets/benchmark/cockpit/m9-02-cropped.jpg"],
    sensors: "/assets/benchmark/m9-sensors.jpg",
    hardwareRows: [["视觉", "多方向高清摄像头"], ["激光雷达", "车顶与车身多位置"], ["毫米波雷达", "4D 毫米波雷达"], ["近距感知", "超声波雷达"], ["驾驶员监测", "舱内视觉感知"]],
    positioning: "面向高端家庭、商务与多人出行，车长 5285 mm、轴距 3125 mm，采用六座布局。",
    cockpitHeadline: "多屏分工与鸿蒙生态服务全舱不同座位。",
    cockpitText: "前排三联屏、双焦面 AR-HUD、后排控制屏与投影系统覆盖全舱；鸿蒙座舱、小艺分区语音和生态互联承担跨屏与跨设备协同。",
    cockpitHighlights: ["多屏分工与双焦面 AR-HUD", "小艺分区语音", "HarmonyOS 生态接续", "观影、会议与休息场景联动"],
    adas: "辅助驾驶覆盖高速、城市道路和泊车，仪表与 HUD 显示即时状态，中控补充环境与规划；车辆平台承接转向、制动与姿态控制。",
    adasFunctions: ["高速辅助驾驶", "城市道路辅助驾驶", "智能泊车"],
    perceptionSummary: "公开配置包括激光雷达、4D 毫米波雷达、超声波雷达和多方向摄像头，覆盖远距、侧向与近场环境。",
    specs: ["39 扬声器 / 2920 W", "四个零重力座椅", "华为 ADS 5"],
    coverage: ["高速 / 城市领航辅助", "智能泊车", "全舱多屏与分区语音", "投影、音响与零重力座椅场景"],
    platform: "当前官网将辅助驾驶平台标注为华为乾崑智驾 ADS 5。车型页面未按交付版本统一披露域控制器芯片型号和 TOPS，因此不作推测。",
    computeMedia: {
      image: "/assets/benchmark/compute/m9-mdc-hardware-clean.png",
      alt: "华为 MDC 智能驾驶计算平台硬件",
      label: "平台级计算硬件",
      caption: "图示为华为 MDC 系列域控制器硬件形态，仅用于说明平台级计算载体；问界 M9 当前交付版本未统一披露芯片型号与 TOPS，不作替代推断。",
      sourceLabel: "华为 MDC 公开硬件资料",
      sourceUrl: "https://www.huawei.com/cn/news/2020/10/intelligent-driving-computing-platform",
    },
    driveMedia: {
      poster: "/assets/benchmark/m9-exterior.jpg",
      alt: "问界 M9 道路行驶画面",
      label: "公开道路实测",
      caption: "实测画面用于观察高速、匝道、窄路与跨楼层泊车中的环境理解和路径执行；测试结果不替代官方能力边界。",
      sourceLabel: "问界 M9 ADS 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1ARMqzSEKQ/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1ARMqzSEKQ&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "能力上限依赖激光雷达、4D 雷达、摄像头和超声波的融合标定，以及转向、制动、供电和通信冗余。",
  },
  {
    id: "l9",
    eyebrow: "家庭旗舰 SUV",
    name: "理想 L9",
    short: "围绕家庭任务设计座舱，并以 3D ViT 与 VLA 延伸辅助驾驶。",
    advantages: ["家庭任务", "M100", "3D ViT / VLA"],
    exterior: "/assets/benchmark/l9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/l9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/l9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/l9-01.jpg", "/assets/benchmark/cockpit/l9-02.jpg"],
    sensors: "/assets/benchmark/l9-sensors.jpg",
    hardwareRows: [["前向激光雷达", "1 颗"], ["摄像头", "侧后 ×2、侧前 ×2、正前 ×2、正后 ×1"], ["毫米波雷达", "3 颗（如配备）"], ["主激光雷达", "1 颗"], ["驾驶员监测", "舱内摄像头"], ["图示版本", "全新 L9 Livis 2026"]],
    positioning: "六座家庭旗舰，重点覆盖多人、长途和儿童家庭的空间与娱乐任务。",
    cockpitHeadline: "围绕家庭任务组织屏幕、语音与舒适硬件。",
    cockpitText: "29 英寸 6K 前排显示、21 英寸 4K 后排移动屏、33 扬声器与 10 L 冰箱共同构成家庭场景；理想同学支持六音区、家庭账号与场景联动。",
    cockpitHighlights: ["前后排显示按座位分工", "理想同学与六音区语音", "家庭账号与偏好同步", "观影、休息与哄睡场景联动"],
    adas: "辅助驾驶覆盖高速、城市道路和泊车；目标泊车可理解用户希望停靠的位置，转向、制动与异常退出仍是能力成立的安全基础。",
    adasFunctions: ["高速辅助驾驶", "城市道路辅助驾驶", "目标泊车"],
    perceptionSummary: "全新 L9 需区分 Ultra 与 Livis 版本。公开信息显示 Livis 配备四颗激光雷达；具体摄像头与雷达数量以对应配置页和实车为准。",
    specs: ["33 扬声器 / 5440 W", "七区空调", "Ultra：一颗 M100"],
    coverage: ["高速 / 城市 / 泊车辅助", "六音区语音", "家庭账号与场景联动", "后排娱乐、冰箱与七区空调"],
    platform: "Ultra 采用一颗自研 M100，Livis 采用双 M100。3D ViT 负责空间编码，VLA 进一步连接视觉、语言目标和车辆动作。",
    computeMedia: {
      image: "/assets/benchmark/compute/l9-m100-board.png",
      alt: "理想汽车 M100 Ultra 马赫超算主板与子板",
      label: "自研芯片与计算板",
      caption: "M100 Ultra 通过马赫超算主板与子板形成车端计算载体；L9 Ultra 使用单颗 M100，Livis 使用双 M100。",
      sourceLabel: "理想 M100 公开硬件展示",
      sourceUrl: "https://www.ixbt.com/news/2026/05/12/li-auto-apple-mach-m100.html",
    },
    driveMedia: {
      poster: "/assets/benchmark/l9-exterior.jpg",
      alt: "理想 L9 道路行驶画面",
      label: "VLA 道路实测",
      caption: "一镜到底实测用于观察 VLA 在跟车、绕行、路口与窄路场景中的连续决策，不把单次表现等同于全场景能力。",
      sourceLabel: "理想 L9 VLA 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV19QhYzyEpC/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV19QhYzyEpC&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "家庭任务成立依赖舱内多用户识别与稳定跨屏协同；辅助驾驶能力依赖安全执行和冗余基础。",
  },
  {
    id: "es9",
    eyebrow: "纯电行政旗舰 SUV",
    name: "蔚来 ES9",
    short: "行政座舱、NOMI、换电与服务共同组成高端产品闭环。",
    advantages: ["行政座舱", "NOMI", "换电与服务"],
    exterior: "/assets/benchmark/es9-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/es9.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/es9-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/es9-01.jpg", "/assets/benchmark/cockpit/es9-02.jpg"],
    sensors: "/assets/benchmark/es9-sensors.jpg",
    hardwareRows: [["视觉", "800 万像素 ×7 + 300 万 ×4"], ["激光雷达", "前向 ×1 + 侧向 ×2"], ["毫米波雷达", "4D 成像雷达 ×1"], ["近距感知", "超声波传感器 ×12"], ["驾驶员监测", "增强主驾驶感知 ×1"], ["其他", "V2X ×1 + 高精定位 ×1"]],
    positioning: "纯电行政旗舰，强调后排体验、智能底盘与品牌服务体系。",
    cockpitHeadline: "以多屏、NOMI 与服务体系覆盖行政出行。",
    cockpitText: "48 英寸 5K 天际线屏、15.6 英寸中控屏与双 16 英寸后排屏构成多屏座舱；SkyOS、NIO OS、NOMI 4.0、NIO Link 与 5D 体验串联服务。",
    cockpitHighlights: ["前后排多屏分工", "NOMI Intelligence 4.0", "5D 沉浸座舱", "NIO Link 与换电服务接续"],
    adas: "NOP+ 覆盖高速、城市、泊车和换电站任务，并面向潮汐车道、可变车道等动态道路继续扩展；AEB、AES 与全向碰撞减缓负责风险场景中的辅助制动或避让。",
    adasFunctions: ["NOP+", "AEB / AES", "泊车与换电站任务"],
    perceptionSummary: "Cedar AQUILA 的 31 个高性能感知单元包括前向超远距激光雷达、两颗侧向广角激光雷达和 4D 成像雷达，并配合多方向摄像头与近距传感器。",
    specs: ["31 个感知硬件", "NX9031 5 nm 芯片", "七类冗余"],
    coverage: ["NOP+", "AEB / AES", "行政后排多屏", "NOMI、NIO Link 与 5D 体验"],
    platform: "ES9 采用蔚来自研 5 nm 智能驾驶芯片 NX9031。NIO WorldModel 理解环境，并通过闭环强化学习持续训练和适应真实道路场景。",
    computeMedia: {
      image: "/assets/benchmark/compute/es9-nx9031.jpg",
      alt: "蔚来官方发布的 NX9031 智能驾驶芯片",
      label: "官方芯片影像",
      caption: "NX9031 与 NIO WorldModel 共同构成 ES9 的车端计算与模型基础，芯片承担感知和规划所需的高性能推理。",
      sourceLabel: "NIO IN 官方发布",
      sourceUrl: "https://www.nio.com/news/news-in-july",
    },
    driveMedia: {
      poster: "/assets/benchmark/es9-exterior.jpg",
      alt: "蔚来 ES9 道路行驶画面",
      label: "NWM 道路实测",
      caption: "公开实测用于观察世界模型在动态交通、绕行与复杂路口中的连续规划；具体能力仍以交付软件版本为准。",
      sourceLabel: "蔚来 ES9 NWM 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1htVN6iEKH/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1htVN6iEKH&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "多激光雷达与 4D 雷达扩大感知范围，同时要求七类冗余、换电服务与底盘控制形成完整闭环。",
  },
  {
    id: "gx",
    eyebrow: "六座 AI 家庭旗舰",
    name: "小鹏 GX",
    short: "以第二代 VLA、全域 AI 与驾驶员失能辅助形成差异化。",
    advantages: ["第二代 VLA", "全域 AI", "失能辅助"],
    exterior: "/assets/benchmark/gx-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/gx.png",
    exteriorPosition: "50% 50%",
    cockpit: "/assets/benchmark/gx-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/gx-01.jpg", "/assets/benchmark/cockpit/gx-02.jpg"],
    sensors: "/assets/benchmark/gx-sensors.jpg",
    hardwareRows: [["视觉", "高清驾驶与环视摄像头"], ["激光雷达", "按车型配置"], ["毫米波雷达", "车外感知"], ["近距感知", "超声波雷达"], ["驾驶员监测", "DMS + 电容方向盘"]],
    positioning: "面向六座家庭出行，把座舱 AI、辅助驾驶和安全处置放在同一产品框架中。",
    cockpitHeadline: "全舱显示、分区交互与 AI 舒适系统协同工作。",
    cockpitText: "88 英寸 AR-HUD、17.3 英寸中控、21.4 英寸后排屏与 8 英寸控制屏覆盖全舱；AI 调光隐私玻璃响应 0.16 s，紫外线阻隔率 99.9%。",
    cockpitHighlights: ["五屏按驾驶与乘员任务分工", "前后独立音区", "AI 调光隐私玻璃", "AI 空调、冰箱与智能互联"],
    adas: "NGP 覆盖高速和城市道路，并连接泊车。高速 NGP 检测到驾驶员长时间无响应时，系统可尝试唤醒、寻找安全区域停车并联络救援。",
    adasFunctions: ["高速 / 城市 NGP", "智能泊车", "驾驶员失能辅助与救援"],
    perceptionSummary: "车身摄像头、毫米波雷达和近距传感器形成 360° 环境覆盖，车内 DMS 与电容方向盘继续判断驾驶员注意力和接管状态。",
    specs: ["750–2250 TOPS", "AI 调光隐私玻璃", "失能辅助与救援"],
    coverage: ["NGP", "驾驶员失能辅助", "AI 气候与分区座舱", "唤醒、安全停车与救援"],
    platform: "消费者版本按配置搭载 1 至 3 颗图灵 AI 芯片，对应 750、1,500 或 2,250 TOPS；第二代 VLA 统一环境理解、语言目标和动作生成。",
    computeMedia: {
      image: "/assets/benchmark/compute/gx-turing.jpg",
      alt: "小鹏图灵 AI 芯片官方技术视觉",
      label: "官方芯片影像",
      caption: "不同配置以 1 至 3 颗图灵 AI 芯片扩展车端算力，第二代 VLA 在同一模型中连接理解与动作。",
      sourceLabel: "小鹏图灵 AI 芯片",
      sourceUrl: "https://www.xiaopeng.com/turingaichip.html",
    },
    driveMedia: {
      poster: "/assets/benchmark/gx-exterior.jpg",
      alt: "小鹏 GX 道路行驶画面",
      label: "第二代 VLA 演示",
      caption: "官方演示用于观察第二代 VLA 在复杂道路中的响应效率、轨迹选择与动作生成；GX 的最终表现以量产交付为准。",
      sourceLabel: "XPENG 官方 VLA 2.0 演示",
      sourceUrl: "https://www.youtube.com/watch?v=8qsLreyJ1qQ",
      videoEmbed: "https://www.youtube-nocookie.com/embed/8qsLreyJ1qQ?rel=0",
    },
    routeCondition: "失能辅助必须同时具备 DMS、转向、制动、供电和通信冗余，远程救援不能替代本地安全闭环。",
  },
  {
    id: "su7",
    eyebrow: "高性能科技轿车",
    name: "第二代小米 SU7",
    short: "以驾驶性能、HyperOS 与统一智驾硬件连接人车家生态。",
    advantages: ["驾驶性能", "HyperOS", "统一智驾硬件"],
    exterior: "/assets/benchmark/su7-exterior.jpg",
    cutout: "/assets/benchmark/cutouts/su7.png",
    exteriorPosition: "72% 52%",
    cockpit: "/assets/benchmark/su7-cockpit.jpg",
    cockpitViews: ["/assets/benchmark/cockpit/su7-01.jpg", "/assets/benchmark/cockpit/su7-02.jpg"],
    sensors: "/assets/benchmark/su7-sensors.jpg",
    hardwareRows: [["视觉", "多方向摄像头"], ["激光雷达", "全系标配"], ["毫米波雷达", "4D 毫米波雷达"], ["近距感知", "超声波雷达 ×12"], ["驾驶员监测", "DMS 摄像头"]],
    positioning: "面向年轻科技用户和小米生态用户，以性能、智能与生态协同形成产品记忆点。",
    cockpitHeadline: "数字交互与实体控制并存，连接手机与家庭生态。",
    cockpitText: "16.1 英寸 3K 中控、56 英寸 HUD、7.1 英寸仪表与保留的实体按键兼顾信息密度和操作确定性；HyperOS 与超级小爱连接手机和家庭设备。",
    cockpitHighlights: ["中控、HUD 与仪表协同显示", "保留高频实体控制", "超级小爱处理多指令", "手机与家庭设备任务接续"],
    adas: "系统覆盖车位到车位连续辅助驾驶和 25 项安全辅助功能；手册强调驾驶员始终承担驾驶责任，并列出污损、遮挡、天气和异形目标等限制。",
    adasFunctions: ["车位到车位辅助驾驶", "城市与高速辅助驾驶", "25 项安全辅助功能"],
    perceptionSummary: "第二代 SU7 全系标配激光雷达、4D 毫米波雷达、摄像头和 12 个超声波雷达；新版车主手册明确标注了关键传感器位置。",
    specs: ["700 TOPS", "4D 毫米波雷达", "小米 XLA"],
    coverage: ["高速 / 城市 / 泊车辅助", "DMS", "超级小爱", "手机 × 汽车 × 家庭设备协同"],
    platform: "全系标配 NVIDIA DRIVE AGX Thor，提供 700 TOPS 辅助驾驶算力；Xiaomi XLA 认知大模型连接泊车、城市和高速场景。",
    computeMedia: {
      image: "/assets/benchmark/compute/su7-thor.jpg",
      alt: "NVIDIA DRIVE AGX Thor 官方芯片影像",
      label: "官方芯片影像",
      caption: "DRIVE AGX Thor 提供统一的车端 AI 计算基础，Xiaomi XLA 在其上连接环境理解、路线规划与车辆动作。",
      sourceLabel: "NVIDIA DRIVE AGX Thor",
      sourceUrl: "https://www.nvidia.com/en-us/solutions/autonomous-vehicles/in-vehicle-computing/",
    },
    driveMedia: {
      poster: "/assets/benchmark/su7-exterior.jpg",
      alt: "第二代小米 SU7 道路行驶画面",
      label: "XLA 道路实测",
      caption: "公开实测用于观察 XLA 在城市与高速道路中的连续辅助驾驶表现，并同时保留驾驶员责任和系统边界说明。",
      sourceLabel: "第二代 SU7 XLA 公开实测",
      sourceUrl: "https://www.bilibili.com/video/BV1HBAjzGEjK/",
      videoEmbed: "https://player.bilibili.com/player.html?bvid=BV1HBAjzGEjK&page=1&high_quality=1&danmaku=0",
    },
    routeCondition: "路线价值来自性能、HyperOS 与人车家生态的协同；辅助驾驶仍需明确系统能力边界和驾驶员责任。",
  },
];

export const benchmarkRows = [
  ["产品定位", "纯电效率型 SUV", "全景智慧旗舰", "家庭旗舰", "纯电行政旗舰", "六座 AI 家庭旗舰", "高性能科技轿车"],
  ["座舱核心", "中控屏 / OTA", "鸿蒙全舱生态", "家庭场景", "NOMI / 行政后排", "全域 AI", "HyperOS 生态"],
  ["辅助驾驶路线", "视觉优先 / FSD", "多传感器 / ADS 5", "3D ViT / VLA", "世界模型 / NOP+", "第二代 VLA", "XLA"],
  ["算力 / 平台", "FSD 平台", "华为平台", "M100", "NX9031", "750–2250 TOPS", "700 TOPS"],
];

export const cockpitRows = [
  ["显示系统", "16 英寸中控 + 8 英寸后排", "前排三联屏 + 双焦面 AR-HUD + 后排投影", "29 英寸 6K 前排 + 21 英寸 4K 后排移动屏", "48 英寸 5K 天际线 + 15.6 英寸中控 + 双 16 英寸后排", "88 英寸 AR-HUD + 17.3 英寸中控 + 21.4 英寸后排 + 8 英寸控制", "16.1 英寸 3K 中控 + 56 英寸 HUD + 7.1 英寸仪表"],
  ["语音与系统", "中控 / App / OTA", "HarmonyOS + 小艺分区语音", "理想同学 + 六音区", "SkyOS / NIO OS + NOMI 4.0", "座舱 AI / VLM", "HyperOS + 超级小爱"],
  ["音响与舒适", "极简座舱与场景模式", "39 扬声器 / 2920 W / 四个零重力座椅", "33 扬声器 / 5440 W / 七区空调 / 10 L 冰箱", "47 扬声器 / 3020 W / 行政后排", "33 扬声器 / AI 调光隐私玻璃", "14 或 25 扬声器 / 保留实体按键"],
  ["生态特征", "软件与充电闭环", "华为终端生态", "家庭账号与任务", "NIO Link、换电与服务", "全域 AI", "手机 × 汽车 × 家庭设备"],
];

export const adasRows = [
  ["感知路线", "摄像头为核心的视觉路线", "激光雷达 + 4D 雷达 + 摄像头 + 超声波", "3D ViT + VLA", "31 个感知硬件，多激光雷达 + 4D 雷达", "摄像头、毫米波与近距感知", "激光雷达 + 4D 毫米波 + 12 超声波 + DMS"],
  ["计算平台", "FSD 平台", "华为 ADS 5", "M100", "NX9031 5 nm", "750 / 1500 / 2250 TOPS", "700 TOPS"],
  ["功能覆盖", "高速 / 城市 / 泊车 / 召唤", "高速 / 城市 / 泊车", "高速 / 城市 / 泊车", "NOP+ / AEB / AES", "NGP / 失能辅助 / 救援", "高速 / 城市 / 泊车"],
  ["成立条件", "可见性、数据与 OTA", "融合标定与整车冗余", "安全执行与家庭任务协同", "七类冗余与底盘协同", "DMS、执行、供电、通信冗余", "统一硬件、XLA 与边界管理"],
];

export const designImplications = {
  cockpit: [
    ["从任务定义开始", "先明确通勤、长途、多人乘坐、娱乐与休息等核心任务，再决定屏幕、语音和舒适硬件如何分工。"],
    ["让 AI 过程可理解", "界面不仅给出结果，还要让用户知道系统理解了什么、正在执行什么，以及何时需要人工确认。"],
    ["跨设备继续任务", "手机上的导航、音乐、会议和家庭控制应在上车后自然接续，减少重复搜索、登录和设置。"],
  ],
  adas: [
    ["路线匹配组织能力", "视觉、多传感器或世界模型没有孤立答案，传感器方案必须与数据、算法、标定和整车集成能力匹配。"],
    ["解释完整驾驶过程", "用户需要同时看见环境感知、规划轨迹、系统状态和接管边界，而不是只看到一个功能名称。"],
    ["先定义安全处置", "在讨论模型上限前，先明确不可用、降级、退出、受控停车与救援链路，保证能力失效时仍可控。"],
  ],
};

export const monitoringRows = [
  ["双手离盘", "双手均未接触方向盘", "2 s 确认", "手接触持续 1 s，或方向盘扭矩越过死区 0.5 s"],
  ["视线脱离", "连续离开前路、仪表 / HUD、左右 / 车内后视镜及标定后的导航查看区", "2 s 确认", "回到任一有效区域并保持 200 ms"],
  ["长闭眼", "持续闭眼或频繁长眨眼伴点头", "闭眼 2 s 判定高风险", "恢复稳定眼部与头姿信号"],
  ["异常头姿", "眼部不可用时，偏航 >45° 或低头 >30°", "持续 2 s", "头姿回到驾驶区域"],
  ["DMS 遮挡 / 不可用", "镜头遮挡、图像质量不足、信号超时或设备 / 固件故障", "2 s 降级，5 s 不可用；信号 >500 ms 视为过期", "清除故障并重新通过系统健康确认"],
];

export const startupFaults = [
  { code: "CAM-01", title: "镜头被遮挡", signal: "人脸或眼部关键点持续缺失，画面亮度或清晰度异常", action: "提示清洁或移除遮挡；关键特征 5 s 未恢复时拒绝开启辅助驾驶。", scope: "可恢复" },
  { code: "CAM-02", title: "强光 / 暗光 / 反射", signal: "逆光、夜间或眼镜反射导致眼部置信度不足", action: "先启用红外补光与头姿降级；仍无法可靠监测时拒绝开启。", scope: "条件降级" },
  { code: "CAM-03", title: "图像或信号超时", signal: "视频流冻结、帧时间戳超过 500 ms 或关键输入中断", action: "按信号缺失处理并记录故障码；禁止用上一帧结果维持可用状态。", scope: "拒绝开启" },
  { code: "CAM-04", title: "设备 / 固件故障", signal: "摄像头自检失败、红外补光失效、算法服务未启动或固件校验失败", action: "提示检修并拒绝开启；行驶中发生则退出组合驾驶辅助。", scope: "硬故障" },
  { code: "SYS-05", title: "跨系统关键链路异常", signal: "AD、HMI、HU、制动、转向、AEB、驻车或关键提醒设备不可用", action: "任一安全关键结果失败或超时，统一判定系统不可用并拒绝激活。", scope: "系统级" },
  { code: "SOS-06", title: "远程服务不可用", signal: "网络、语音或事件上报失败", action: "本地 RMF 能力通过时允许本地功能；明确提示远程救援暂不可用。", scope: "可降级" },
];

export const gazeZones = [
  { code: "01", title: "前方道路", rule: "以自然前视为中心，初始头部偏航 ±30°、俯仰 −15° 至 +15°。", status: "持续有效" },
  { code: "02", title: "仪表 / HUD", rule: "查看车速、告警和辅助驾驶状态属于驾驶任务相关注视。", status: "有效区域" },
  { code: "03", title: "左右 / 车内后视镜", rule: "按车型分别标定独立区域；正常扫视和并线观察不触发 EOR。", status: "有效区域" },
  { code: "04", title: "中控导航", rule: "允许短时查看导航；需限制连续停留和累计占比，超出标定后才进入脱离计时。", status: "限时有效" },
  { code: "05", title: "非驾驶相关区域", rule: "连续 2 s 不在任何驾驶任务相关区域，才确认视线脱离。", status: "触发 EOR" },
];

export const competitorRows = [
  ["Tesla", "逐级提醒；持续无响应后受控停车", "当前行程限制再次开启辅助驾驶", "公开策略强调车端处置"],
  ["问界 M9（2026）", "高速 / 快速路优先靠边；城市条件不足时车道内停车", "停车、解锁并发起 SOS", "受道路与安全区域条件约束"],
  ["小鹏 GX", "脉冲制动唤醒，向右变道并驶入安全区域", "停车、SOS、解锁并联系救援", "失能辅助依赖整车与通信冗余"],
  ["第二代小米 SU7", "公开手册覆盖疲劳与分心提醒", "文档未公开失能自动停车与 SOS 闭环", "不能据此推断未公开能力"],
];

export const scenarios = {
  hands: {
    label: "手部离盘",
    note: "10–80 km/h 且视线正常时，8 s 触发一级 HOR；持续 8 s 升级二级。视线不可靠时一级前移至 5 s，80 km/h 以上前移至 3 s。",
    points: [[0, "监测"], [2, "离盘确认"], [8, "一级提醒"], [16, "二级提醒"]],
  },
  gaze: {
    label: "视线脱离",
    note: "视线离开全部驾驶相关区域 2 s 确认，3 s 触发一级提醒，最迟不超过 5 s；继续 3 s 升级二级。视线回归确认时间为 200 ms。",
    points: [[0, "监测"], [2, "脱离确认"], [3, "一级提醒"], [6, "二级提醒"]],
  },
  both: {
    label: "手眼同时脱离",
    note: "原始异常持续 3 s 后直接进入二级提醒，以一条合并信息呈现，避免重复告警造成认知负担。",
    points: [[0, "监测"], [3, "二级提醒"], [8, "DCA"], [13, "RMF / SOS"]],
  },
  fatigue: {
    label: "疲劳",
    note: "长闭眼或频繁长眨眼伴点头达到高风险后，从二级提醒起步；多信号持续且驾驶员无响应时进入 DCA。",
    points: [[0, "监测"], [2, "高风险确认"], [2.2, "二级提醒"], [5.2, "DCA"], [10.2, "RMF / SOS"]],
  },
  sleep: {
    label: "疑似睡着",
    note: "长闭眼、异常头姿、无有效操作三类证据中至少满足两类，且二级提醒后 3 s 无响应，则进入 DCA；DCA 目标 5 s、最迟 10 s 转 RMF。",
    points: [[0, "证据融合"], [2, "二级提醒"], [5, "DCA"], [10, "RMF / SOS"]],
  },
  incapacity: {
    label: "疑似失能",
    note: "疑似失能优先级最高。车端启动稳定减速和安全停车，远程救援在同一事件中并行发起；远程连接失败不阻断车端 RMF。",
    points: [[0, "疑似失能"], [0.2, "DCA"], [5, "RMF 减速"], [5, "SOS 并行"], [12, "安全停车"]],
  },
};

export const checks = [
  ["DMS", "驾驶员在位、安全带、相机、红外与算法", "失败则拒绝开启"],
  ["AD", "车道、制动、转向、AEB、双闪与驻车", "失败则拒绝或退出"],
  ["HMI", "策略、文案、优先级与升级链路已加载", "失败则拒绝开启"],
  ["HU", "仪表、主机、扬声器与振动装置", "关键链路失败则拒绝"],
  ["SOS", "网络、语音与事件上报状态", "远程不可用时本地功能仍可运行"],
];

export const driverStates = [
  { key: "normal", index: "01", title: "正常 / 已恢复", level: "返回持续监测", trigger: "手部与视线均有效，未达到疲劳、睡着或失能条件，且关键输入可用。", recovery: "异常恢复需有效握盘连续 2 s、视线回归至少 200 ms；三级还需合理转向或踏板操作。" },
  { key: "hands", index: "02", title: "仅手部离盘", level: "HOR 链路", trigger: "双手均不满足触碰、握持或有效转向扭矩条件持续 2 s，视线仍有效。", recovery: "有效握盘连续 1 s 后解除；单次轻触不视为恢复。" },
  { key: "gaze", index: "03", title: "仅视线脱离", level: "EOR 链路", trigger: "视线连续离开前路、仪表 / HUD、后视镜与标定后的导航查看区 2 s，手部仍有效；正常扫视后视镜和短时查看导航不触发。", recovery: "视线回到任一有效区域至少 200 ms 后解除。" },
  { key: "both", index: "04", title: "手眼同时脱离", level: "组合提醒", trigger: "手部离盘与视线脱离在同一时间段同时成立，只输出一套组合提醒。", recovery: "两项都恢复才回到正常；只恢复一项时转入仍未恢复的单项状态。" },
  { key: "fatigue", index: "05", title: "疲劳 / 疑似睡着", level: "从二级开始", trigger: "频繁长眨眼、打哈欠或连续点头用于判断疲劳；闭眼连续 2 s 或长闭眼伴头部下垂判为疑似睡着。", recovery: "睁眼、视线回归并出现有效操作后解除。" },
  { key: "incapacity", index: "06", title: "疑似失能", level: "跳级进入 DCA", trigger: "长闭眼或异常头姿、无有效操作、对二级强提醒 3 s 无回应三类中至少两类成立。", recovery: "不诊断具体疾病；直接进入三级 DCA，并按时限启动 RMF 与 SOS。" },
  { key: "unavailable", index: "07", title: "监测不可用", level: "独立故障链", trigger: "镜头遮挡、强光 / 暗光导致置信度不足、视频流超时，或摄像头 / 红外 / 算法 / 固件自检失败，均需输出具体故障原因。", recovery: "不能把“看不清”当作驾驶员正常；清除故障后需重新通过系统健康确认。" },
];

export const escalationRows = [
  ["HOR 一级", ">80 km/h 第 3 s；其他第 5 s；确认视线正常可放宽至第 8 s", "两声短音；请握住方向盘", "继续离盘后升级二级，任何情况不超过法规上限"],
  ["EOR 一级", "原始视线异常第 3 s，最迟不超过第 5 s", "两声短音；请注视前方", "仍脱离 3 s 升级二级；回归 200 ms 后解除"],
  ["手眼组合", "原始异常持续第 3 s", "只播放一套当前最高等级提示；请握住方向盘并注视前方", "不分别播放 HOR 与 EOR"],
  ["二级强提醒", "单项持续或疲劳 / 疑似睡着", "三次强音、振动两次；请立即接管车辆", "无回应约每 2 s 重复；3～5 s 进入 DCA"],
  ["DCA", "二级无回应 3～5 s；高置信失能允许跳级", "持续高低音与触觉；车辆即将减速", "目标 5 s、法规最迟 10 s 触发 RMF"],
  ["RMF + SOS", "DCA 后持续无回应", "持续强警示并播报减速、寻找安全停车位置", "车端处置与远程建联并行，远程失败不阻断车端"],
];

export const ttsRows = [
  ["HOR 一级", "两声短音：120 ms / 声，间隔 120 ms", "请握住方向盘", "同一事件一次；有效操作后解除"],
  ["EOR 一级", "两声短音", "请注视前方", "一次；视线回归 200 ms 后解除"],
  ["手眼组合", "当前最高等级的一套提示音", "请握住方向盘并注视前方", "不分别播 HOR 与 EOR"],
  ["二级强提醒", "三次强音：350 ms / 次，间隔 200 ms；振动两次", "请立即接管车辆", "约 2 s 一周期"],
  ["DCA", "高低音交替：500 ms 响、300 ms 停；持续触觉", "请立即接管车辆，车辆即将减速", "最多每 5 s 重播"],
  ["RMF 启动", "持续强警示音", "驾驶员长时间未响应，车辆正在减速并寻找安全停车位置", "状态变化时播报"],
  ["安全停车", "停止强警示，保留低强度状态音", "车辆已安全停车，正在联系紧急救援", "停车后一次"],
  ["SOS 接通", "一次确认音", "紧急救援已接通", "操作员讲话时 TTS 停止"],
  ["救援受理", "一次确认音", "救援已受理，请保持通话", "无可靠数据时不播报预计时间"],
];

export const hmiStates = [
  { id: "hor-1", code: "HOR", level: "一级", title: "请握住方向盘", detail: "检测到双手离盘", timing: "黄色小卡片 · 两声短音 · 不振动", image: "/assets/dms/hmi/level-1@2x.png", tone: 1, icon: "steering", theme: "level-one" },
  { id: "hor-2", code: "HOR", level: "二级", title: "请立即接管车辆", detail: "双手离盘持续，升级强提醒", timing: "橙红固定卡片 · 三次强音 · 两次触觉", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "steering", theme: "level-two" },
  { id: "eor-1", code: "EOR", level: "一级", title: "请注视前方", detail: "视线离开驾驶任务相关区域", timing: "黄色小卡片 · 两声短音 · 不振动", image: "/assets/dms/hmi/level-1@2x.png", tone: 1, icon: "eye", theme: "level-one" },
  { id: "eor-2", code: "EOR", level: "二级", title: "请立即接管车辆", detail: "视线持续脱离", timing: "橙红固定卡片 · 三次强音 · 两次触觉", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "eye", theme: "level-two" },
  { id: "both-2", code: "HOR × EOR", level: "二级", title: "请握住方向盘并注视前方", detail: "手眼同时脱离，只输出一套组合提醒", timing: "沿用当前最高等级 · 避免重复播报", image: "/assets/dms/hmi/level-2@2x.png", tone: 2, icon: "both", theme: "level-two" },
  { id: "dca-3", code: "DCA", level: "三级", title: "请立即接管车辆", detail: "车辆即将减速", timing: "持续红色卡片 · 高低音交替 · 连续触觉", image: "/assets/dms/hmi/level-3@2x.png", tone: 3, icon: "warning", theme: "level-three" },
  { id: "rmf-3", code: "RMF", level: "安全介入", title: "车辆正在减速", detail: "正在寻找安全停车位置", timing: "持续强警示 · 状态变化时播报", image: "/assets/dms/hmi/level-3@2x.png", tone: 3, icon: "car", theme: "level-three" },
  { id: "sos", code: "SOS", level: "远程救援", title: "正在连接远程救援坐席", detail: "车端 RMF 继续执行", timing: "一次确认音 · 连接失败保持重试", image: "/assets/dms/hmi/level-3@2x.png", tone: 2, icon: "sos", theme: "sos" },
];

export const systemLayers = [
  { index: "01", title: "驾驶员感知", items: ["红外摄像头与红外补光", "面部、眼睑、视线与头姿", "方向盘触碰 / 握持与转向扭矩", "踏板、安全带与座椅在位"] },
  { index: "02", title: "道路与定位", items: ["前视与环视摄像头", "毫米波雷达、车速、GNSS 与 IMU", "导航、车道、障碍物与周边车辆", "高速 / 城市 / 乡村安全停车区域"] },
  { index: "03", title: "计算与执行", items: ["DMS 计算单元识别驾驶状态", "ADAS 域控规划轨迹与停车", "安全 MCU 监控关键状态", "EPS、制动、动力、双闪与驻车执行"] },
  { index: "04", title: "HMI 与通信", items: ["仪表、中控、扬声器与振动器", "T-Box、4G / 5G 与车辆网关", "麦克风、扬声器与 HSM", "校验不足时仅允许通话与救援协调"] },
];

export const qualityRules = [
  ["本地安全", "远程平台断网或故障时，车辆仍独立完成 RMF 与停车；远程协助不得暂停、关闭或覆盖 RMF。"],
  ["故障与降级", "摄像头遮挡、信号丢失或关键设备故障时，按影响拒绝启用、限制功能或退出辅助驾驶。"],
  ["响应与同步", "DMS、HMI、HU、AD 与 SOS 使用统一时间，整体响应不得突破最迟触发时限。"],
  ["隐私保护", "座舱图像和语音仅在车端处理，只上传处置事件所需最少信息；查看、导出与删除均留痕。"],
  ["事件回放", "记录驾驶员状态、提醒、车辆控制、远程通话、操作指令与救援结果，支持完整回放。"],
  ["升级兼容", "统一信号名、状态、超时和故障码；任一模块升级后重新验证完整链路。"],
];

export const acceptanceRows = [
  ["AT-01 启用条件", "断开安全带、DMS、AEB、记录和关键提醒设备", "每项失败均拒绝启用或明确降级，并提示具体原因"],
  ["AT-02 手部离盘", "注入握持、扭矩并完成离盘 / 重新握盘", "HOR 与升级不超时；有效操作后解除"],
  ["AT-03 视线脱离", "覆盖前视、仪表、后视镜、中控、夜间和眼镜", "有效区域不误报；EOR、升级和 DCA 符合时限"],
  ["AT-04 组合 / 失能", "模拟手眼脱离、长闭眼、头部下垂和无操作", "组合提示不重叠；高置信疑似失能能够跳级"],
  ["AT-05 RMF", "覆盖高速、城市、乡村和有 / 无安全区", "停车策略正确；断网不中断；不继续原行程"],
  ["AT-06 SOS / 回放", "模拟连接失败、救援受理并导出事件", "工单不重复，权限正确，事件可完整回放"],
];

export const remotePermissions = [
  ["车内语音通话、查看必要车辆与道路信息、联系救援", "允许"],
  ["引导车辆前往最近安全区域", "满足身份、网络、道路和执行器校验后允许"],
  ["继续驾驶员原定行程、关闭车端 RMF", "禁止"],
  ["身份或网络校验失败后继续控制", "禁止，仅允许通话和救援"],
];

export const eventFields = [
  ["驾驶员状态", "手部、视线、眼睑、头部姿态、有效操作、置信度与故障原因"],
  ["交互记录", "提醒等级、卡片文案、提示音 ID、TTS 文案、振动与开始 / 结束时间"],
  ["车辆处置", "车速、挡位、位置、道路类型、RMF 目标、轨迹、减速度、双闪和停车"],
  ["远程救援", "连接、通话、操作员访问、评估结论、紧急联系人、救援受理和结束原因"],
];

export const appendix = [
  { title: "初始阈值与状态优先级", body: "辅助驾驶开启且车速大于 10 km/h 后进入监测。0–10 km/h 不启用，10–80 km/h 初始容忍 6 s，80 km/h 以上 3 s。状态优先级为：疑似失能 > 疲劳/疑似睡着 > 手眼同时脱离 > 单一脱离 > 正常。监测不可用作为独立故障状态处理。" },
  { title: "测试与验收", body: "P0 安全缺陷为 0；高严重度误触发不高于 1 次/1000 万公里，漏触发不高于 2 次/1000 万公里；受控场地 RMF 安全停车成功率不低于 99.9%；有网络条件下 SOS 成功率不低于 99.5%。人因测试覆盖年龄、身高、眼镜、姿态、光照与噪声。" },
  { title: "远程权限与事件字段", body: "车端上报事件类型、最小必要车辆状态、DMS 结论、告警阶段、DCA/RMF 状态、网络状态与时间戳。远程坐席可评估、联系紧急联系人并发起救援；远程链路不得解除或中断本地安全处置。" },
  { title: "TTS 与 HMI 矩阵", body: "一级为黄色小卡片，可使用一次性双短音；二级为橙红固定卡片，三次增强提示音并配合两次方向盘或座椅振动；三级为持续红色卡片和连续触觉提醒。声音先于 TTS 约 200–300 ms，导航播报暂停、媒体音量降低。" },
  { title: "法规与工程约束", body: "系统以本地安全闭环为前提，支持离线运行、故障降级、统一时钟、最小化数据上传和可审计日志。图像与音频优先端侧处理，远程仅获取完成安全评估和救援所需的最小信息。" },
];

export const chapterGroups = [
  { title: "六车型对标", links: [["benchmark", "对标总览"], ["vehicle-detail", "单车型详情"], ["comparison", "座舱与辅助驾驶横向对比"], ["conclusion", "综合结论"], ["sources", "资料来源"]] },
  { title: "DMS PRD", links: [["dms", "PRD 总览"], ["dms-background", "需求背景与合规"], ["dms-checks", "启动前检查"], ["dms-monitoring", "持续监测与状态判断"], ["dms-timeline", "分级提醒时间轴"], ["dms-hmi", "HMI 交互"], ["dms-rmf", "车辆处置与远程救援"], ["dms-architecture", "硬件与系统架构"], ["dms-competitors", "DMS 专项竞品"], ["dms-appendix", "测试与附录"]] },
];
