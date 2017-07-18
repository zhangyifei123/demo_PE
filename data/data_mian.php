<?php
    $type = $_REQUEST['type'];
    $str = '';
    //勋章
    if($type == 'medal'){
        $str='{
    "granted": [ ], 
    "ungranted": [
        {
            "id": "36", 
            "name": "挑战3公里", 
            "description": "单次跑步超过3公里", 
            "image": "http://source.hotbody.cn/kbGHQkgS-lF0m-xuqk-ZEwu-8JLWqTarmf2f.png", 
            "type": "4", 
            "badge_rank": 293052
        }, 
        {
            "id": "37", 
            "name": "挑战5公里", 
            "description": "单次跑步超过5公里", 
            "image": "http://source.hotbody.cn/D9xT1qc1-cuRQ-dHMe-KiJf-vTtrg3lE1Pe9.png", 
            "type": "4", 
            "badge_rank": 187391
        }, 
        {
            "id": "38", 
            "name": "挑战10公里", 
            "description": "单次跑步超过10公里", 
            "image": "http://source.hotbody.cn/BxK23tXD-wLEG-P23U-8CCB-2zl9pxUwU21G.png", 
            "type": "4", 
            "badge_rank": 17588
        }, 
        {
            "id": "39", 
            "name": "挑战半程马拉松", 
            "description": "单次跑步超过半马距离21.097公里", 
            "image": "http://source.hotbody.cn/L2KMLi48-oonF-pHHF-smcs-rZrFoGda0lTi.png", 
            "type": "4", 
            "badge_rank": "152"
        }, 
        {
            "id": "40", 
            "name": "挑战马拉松", 
            "description": "单次跑步超过全马距离42.193公里", 
            "image": "http://source.hotbody.cn/SkkVrIDk-yxqv-dXEE-dCVV-PPm9IXL2xuJN.png", 
            "type": "4", 
            "badge_rank": "18"
        }, 
        {
            "id": "41", 
            "name": "累积跑步50公里", 
            "description": "累积跑步50公里", 
            "image": "http://source.hotbody.cn/ox86hTKr-eJ37-sJBI-rK3W-3HRP32zlyTq6.png", 
            "type": "4", 
            "badge_rank": 19109
        }, 
        {
            "id": "42", 
            "name": "累积跑步100公里", 
            "description": "累积跑步100公里", 
            "image": "http://source.hotbody.cn/qXTr0mzD-ymZs-sREk-oTXE-1oU7lXgyOalw.png", 
            "type": "4", 
            "badge_rank": "642"
        }, 
        {
            "id": "43", 
            "name": "累积跑步200公里", 
            "description": "累积跑步200公里", 
            "image": "http://source.hotbody.cn/C5HqXAib-tToK-fDtk-bF6K-mTWUhhEu9qfu.png", 
            "type": "4", 
            "badge_rank": "171"
        }, 
        {
            "id": "45", 
            "name": "累积跑步1000公里", 
            "description": "累积跑步1000公里", 
            "image": "http://source.hotbody.cn/gKlHaTcK-45nm-0fDT-4tdX-U0VFhGAp9iDZ.png", 
            "type": "4", 
            "badge_rank": "0"
        }, 
        {
            "id": "46", 
            "name": "累积跑步2000公里", 
            "description": "累积跑步2000公里", 
            "image": "http://source.hotbody.cn/eJLlTaet-dUXT-75b2-kfhl-psGXpOCds8Fq.png", 
            "type": "4", 
            "badge_rank": "0"
        }, 
        {
            "id": "47", 
            "name": "累积跑步5000公里", 
            "description": "累积跑步5000公里", 
            "image": "http://source.hotbody.cn/9QMeOdTl-0NoT-LtJd-Nlz3-yAvnnqKJzGmR.png", 
            "type": "4", 
            "badge_rank": "0"
        }, 
        {
            "id": "1", 
            "name": "1天里程碑", 
            "description": "首次训练", 
            "image": "http://source.hotbody.cn/h5NakV2i-WLN7-C3gJ-Iun9-kqZTEAatexcF.png", 
            "type": "2", 
            "badge_rank": 24354846
        }, 
        {
            "id": "21", 
            "name": "7天里程碑", 
            "description": "累计训练 7 天", 
            "image": "http://source.hotbody.cn/io1wrMz6-ZMX1-GIvF-uJwH-Zs98ulDvPApr.png", 
            "type": "2", 
            "badge_rank": 5459179
        }, 
        {
            "id": "2", 
            "name": "14天里程碑", 
            "description": "累计训练 14 天", 
            "image": "http://source.hotbody.cn/fGh7TPip-kSgi-aJiR-bwkN-4Z3ig3k8rbN4.png", 
            "type": "2", 
            "badge_rank": 3563708
        }, 
        {
            "id": "3", 
            "name": "30天里程碑", 
            "description": "累计训练 30 天", 
            "image": "http://source.hotbody.cn/f09GFvX9-Owom-8T8K-ttLF-4kT9VDZlNKDr.png", 
            "type": "2", 
            "badge_rank": 1340736
        }, 
        {
            "id": "4", 
            "name": "60天里程碑", 
            "description": "累计训练 60 天", 
            "image": "http://source.hotbody.cn/apNhbOkD-TBb6-fMq1-Vexo-WTeuCIRMh870.png", 
            "type": "2", 
            "badge_rank": 405649
        }, 
        {
            "id": "5", 
            "name": "120天里程碑", 
            "description": "累计训练 120 天", 
            "image": "http://source.hotbody.cn/uCP2Ora0-vLDy-Rkwa-WArP-IOhSDU6wd4Zl.png", 
            "type": "2", 
            "badge_rank": 91140
        }, 
        {
            "id": "6", 
            "name": "180天里程碑", 
            "description": "累计训练 180 天", 
            "image": "http://source.hotbody.cn/Gg9P1GIk-bsSl-Ubva-tZLT-apqDId52v3Ro.png", 
            "type": "2", 
            "badge_rank": 33161
        }, 
        {
            "id": "7", 
            "name": "240天里程碑", 
            "description": "累计训练 240 天", 
            "image": "http://source.hotbody.cn/9m3ao8zW-eFv9-0xPz-mE41-BncmnNE0KC2u.png", 
            "type": "2", 
            "badge_rank": 14660
        }, 
        {
            "id": "8", 
            "name": "300天里程碑", 
            "description": "累计训练 300 天", 
            "image": "http://source.hotbody.cn/zOu0Wf1x-wWO6-4ho2-NVbC-K0ERQwlpTBCv.png", 
            "type": "2", 
            "badge_rank": "855"
        }, 
        {
            "id": "9", 
            "name": "365天里程碑", 
            "description": "累计训练 365 天", 
            "image": "http://source.hotbody.cn/T7yTaudD-lyp7-m4XV-3e0S-WP9kBdgBZ0dT.png", 
            "type": "2", 
            "badge_rank": "394"
        }, 
        {
            "id": "10", 
            "name": "训练3连击", 
            "description": "完成连续训练 3 天", 
            "image": "http://source.hotbody.cn/B1X5q33T-TNCC-rqbM-nfDb-GS0kGIw32NFt.png", 
            "type": "1", 
            "badge_rank": 8971321
        }, 
        {
            "id": "25", 
            "name": "训练5连击", 
            "description": "完成连续训练 5 天", 
            "image": "http://source.hotbody.cn/PVHeBkNW-gByP-6QW0-e2fF-TA8BTTKhGtd3.png", 
            "type": "1", 
            "badge_rank": 3165289
        }, 
        {
            "id": "11", 
            "name": "训练7连击", 
            "description": "完成连续训练 7 天", 
            "image": "http://source.hotbody.cn/cm6WpFcc-xt5Q-ZiOg-knwb-nFHRDCWVJs1K.png", 
            "type": "1", 
            "badge_rank": 2281463
        }, 
        {
            "id": "12", 
            "name": "训练14连击", 
            "description": "完成连续训练 14 天", 
            "image": "http://source.hotbody.cn/oMeWEMJG-cPTz-4dtT-4gS7-iKM7R0pSpGV2.png", 
            "type": "1", 
            "badge_rank": 517915
        }, 
        {
            "id": "26", 
            "name": "训练21连击", 
            "description": "完成连续训练 21 天", 
            "image": "http://source.hotbody.cn/LxXXzBBm-CF0d-IUmf-fbru-XIdSr3N614NN.png", 
            "type": "1", 
            "badge_rank": 151145
        }, 
        {
            "id": "13", 
            "name": "训练30连击", 
            "description": "完成连续训练 30 天", 
            "image": "http://source.hotbody.cn/gMpndv0k-lg2G-I3oi-h4WC-nT1zWfBdA2TQ.png", 
            "type": "1", 
            "badge_rank": 84823
        }, 
        {
            "id": "14", 
            "name": "训练50连击", 
            "description": "完成连续训练 50 天", 
            "image": "http://source.hotbody.cn/mNLDnCMS-7XIn-HeWK-gOL9-T610BlWSvzpx.png", 
            "type": "1", 
            "badge_rank": 27034
        }, 
        {
            "id": "15", 
            "name": "训练100连击", 
            "description": "完成连续训练 100 天", 
            "image": "http://source.hotbody.cn/Un8wHpge-EL4R-6Gu2-3WmR-SSMapCWRcGqk.png", 
            "type": "1", 
            "badge_rank": "649"
        }, 
        {
            "id": "16", 
            "name": "训练150连击", 
            "description": "完成连续训练 150 天", 
            "image": "http://source.hotbody.cn/DMlpTIuT-QUS3-IZmp-5vT7-yKnI9POLWfpZ.png", 
            "type": "1", 
            "badge_rank": "248"
        }, 
        {
            "id": "17", 
            "name": "训练200连击", 
            "description": "完成连续训练 200 天", 
            "image": "http://source.hotbody.cn/RU7mAbXm-MfZM-hFlD-mCoG-0rgPtk938otv.png", 
            "type": "1", 
            "badge_rank": "136"
        }, 
        {
            "id": "18", 
            "name": "训练250连击", 
            "description": "完成连续训练 250 天", 
            "image": "http://source.hotbody.cn/dWHWross-A60E-u0oe-6pSp-P3lubF9WkLDs.png", 
            "type": "1", 
            "badge_rank": "80"
        }, 
        {
            "id": "19", 
            "name": "训练300连击", 
            "description": "完成连续训练 300 天", 
            "image": "http://source.hotbody.cn/vkwgQTA4-EspI-DBHS-shWh-hLOmvxtblMqL.png", 
            "type": "1", 
            "badge_rank": "45"
        }, 
        {
            "id": "20", 
            "name": "训练365连击", 
            "description": "完成连续训练 365 天", 
            "image": "http://source.hotbody.cn/pmZ0TsMi-cQi7-3pd8-y2aS-wDgiJuu1rS8S.png", 
            "type": "1", 
            "badge_rank": "24"
        }
    ]
}
';
    }else if($type == 'train'){//全部训练
        $str='{
    "status": "200", 
    "hb_data_version": "1499989821", 
    "data": {
        "classification": [
            {
                "id": "21", 
                "name": "明星专区", 
                "image": "http://source.hotbody.cn/FK06bLIn-UWK7-3CQB-qSe5-tDwPb7XLWV58.jpg", 
                "custom": "hotbody://blog?feed_uid=0f61b6cc-2747-4226-a4b6-764add91a725", 
                "custom_desc": "忙碌的你该如何保持好身材？", 
                "amount": "5"
            }, 
            {
                "id": "11", 
                "name": "瑜伽专题", 
                "image": "http://source.hotbody.cn/fDfXsbxR-OPpb-9FFH-xn31-th13DQhmGTWn.png", 
                "custom": "hotbody://blog?feed_uid=43a9267a-a1a2-4715-a41a-1c203b1cd807", 
                "custom_desc": "新一代瑜伽课程有什么不一样", 
                "amount": "16"
            }, 
            {
                "id": "4", 
                "name": "全身减脂", 
                "image": "http://source.hotbody.cn/Do36WHKT-zTDz-ZNLd-rdBH-QSNbJLc0AIFB.png", 
                "custom": "hotbody://blog?feed_uid=a2253eaf-9acf-42c8-a446-23a8f37af050", 
                "custom_desc": "减肥的基本原理", 
                "amount": "11"
            }, 
            {
                "id": "6", 
                "name": "增肌训练", 
                "image": "http://source.hotbody.cn/RIyJzOu6-gr3l-RyKD-FKcx-CPn0wMTs4bkb.png", 
                "custom": "hotbody://blog?feed_uid=b4684187-8e8c-4787-bdaf-570aba4dffaa", 
                "custom_desc": "增肌的基本原理是什么？", 
                "amount": "23"
            }, 
            {
                "id": "5", 
                "name": "舒缓放松", 
                "image": "http://source.hotbody.cn/H4NiOkbM-kFyG-CbBC-uRLg-CZICTKBw89LZ.png", 
                "custom": "hotbody://blog?feed_uid=59b725c0-0c67-4f95-80cd-7179e78b5ef3", 
                "custom_desc": "身材好的人都在练普拉提", 
                "amount": "17"
            }, 
            {
                "id": "15", 
                "name": "体态纠正", 
                "image": "http://source.hotbody.cn/1PG42Dnp-lee2-OfdA-AixK-MCKFT5wK6lBk.jpg", 
                "custom": "", 
                "custom_desc": "", 
                "amount": "7"
            }, 
            {
                "id": "2", 
                "name": "腹部训练", 
                "image": "http://source.hotbody.cn/F03M3wqX-igHk-Ff5u-Ek0A-VzlV8HrpE3xP.png", 
                "custom": "hotbody://blog?feed_uid=081f8456-6ef4-4182-a932-a3f4bbae08d8", 
                "custom_desc": "腰酸背痛？ 跑步容易受伤？你需要锻炼核心肌群", 
                "amount": "26"
            }, 
            {
                "id": "3", 
                "name": "臀腿训练", 
                "image": "http://source.hotbody.cn/RyJwSqAx-ELgo-VBG5-2vqT-q97fknZaOBlT.png", 
                "custom": "hotbody://blog?feed_uid=e1cf4155-b469-4620-89f5-0a136378c031", 
                "custom_desc": "关于瘦腿，你需要知道这些", 
                "amount": "21"
            }, 
            {
                "id": "9", 
                "name": "肩背训练", 
                "image": "http://source.hotbody.cn/hE2ucGo1-eHol-7ueq-7fgq-ekfEITfcmJCy.png", 
                "custom": "hotbody://blog?feed_uid=fc8c421b-16e0-455f-a930-5b7b73dd0dec", 
                "custom_desc": "想穿衣有型？肩部训练必不可少", 
                "amount": "18"
            }, 
            {
                "id": "1", 
                "name": "手臂训练", 
                "image": "http://source.hotbody.cn/lBLfCiuG-vbVl-wMyu-PWp7-LDcfWZuya2Sh.png", 
                "custom": "hotbody://blog?feed_uid=03d29ad3-df41-478a-a0e4-16ef7f3e8e19", 
                "custom_desc": "为什么我们要加强手臂训练？", 
                "amount": "6"
            }, 
            {
                "id": "10", 
                "name": "胸肌训练", 
                "image": "http://source.hotbody.cn/JSmryEx3-5uwh-EMVa-bDaN-cgRhv6cCX9Js.png", 
                "custom": "hotbody://blog?feed_uid=3b64876a-254d-46f8-bdf0-f4a4a9ee0d6d", 
                "custom_desc": "胸肌是每一位训练者的梦想", 
                "amount": "8"
            }, 
            {
                "id": "7", 
                "name": "女生专题", 
                "image": "http://source.hotbody.cn/XTanS43P-GgaB-aHim-WRtV-VNPxKBJl7D3C.png", 
                "custom": "", 
                "custom_desc": "", 
                "amount": "28"
            }, 
            {
                "id": "16", 
                "name": "跑步专题", 
                "image": "http://source.hotbody.cn/doVZ3iOh-dCX1-i5E5-PJIT-4J7l0hRWT8Cy.jpg", 
                "custom": "", 
                "custom_desc": "", 
                "amount": "7"
            }, 
            {
                "id": "12", 
                "name": "健身房器械", 
                "image": "http://source.hotbody.cn/xA8EPl88-MKGy-FccD-LCM1-3uglEOckweoh.jpg", 
                "custom": "", 
                "custom_desc": "", 
                "amount": "6"
            }
        ], 
        "banner": [
            {
                "id": "1259", 
                "type": null, 
                "name": "7.10晨起", 
                "info": null, 
                "image": "http://source.hotbody.cn/4xKDy6nE-aRG4-51cZ-eNpX-VQ4Jo5nu6suh.jpeg", 
                "title": "", 
                "custom": "hotbody://lesson_detail?id=1576"
            }, 
            {
                "id": "1270", 
                "type": null, 
                "name": "7.13晚间瑜伽", 
                "info": null, 
                "image": "http://source.hotbody.cn/hXg7ha09-EETU-fKCO-feel-dhq4fT71DHfg.jpg", 
                "title": "", 
                "custom": "2015-07-14 11:00"
            }, 
            {
                "id": "1242", 
                "type": null, 
                "name": "6.29张俪预热", 
                "info": null, 
                "image": "http://source.hotbody.cn/pP45PF6a-rmBn-MESi-8NVb-hqd1NhqrEz2I.jpg", 
                "title": "", 
                "custom": "hotbody://blog?feed_uid=0f61b6cc-2747-4226-a4b6-764add91a725"
            }, 
            {
                "id": "1261", 
                "type": null, 
                "name": "7月10日火辣热舞精", 
                "info": null, 
                "image": "http://source.hotbody.cn/3BBnJNs9-qlml-ppzo-426Q-IX5dLXQ6Bnyq.jpg", 
                "title": "", 
                "custom": "hotbody://feed_detail?feed_uid=b8ef70f5-44bb-4c55-b25c-dc11cb4c3c92"
            }, 
            {
                "id": "1236", 
                "type": null, 
                "name": "6.28累", 
                "info": null, 
                "image": "http://source.hotbody.cn/N768TuxM-dtyW-rn1g-HPUk-kvX3Wr5iBiZT.jpeg", 
                "title": "", 
                "custom": "hotbody://blog?feed_uid=c3eaea8a-dbe2-40f7-9c90-efa0a6e2c456"
            }
        ], 
        "most_punch": [ ]
    }
}';
    }else if($type == 'star'){//明星专区
        $str='{
    "status": "200", 
    "hb_data_version": "1499992075", 
    "data": {
        "group": {
            "id": "21", 
            "name": "明星专区", 
            "custom": "hotbody://blog?feed_uid=0f61b6cc-2747-4226-a4b6-764add91a725", 
            "custom_desc": "忙碌的你该如何保持好身材？", 
            "amount": "5"
        }, 
        "list": [
            {
                "id": "1703", 
                "name": "张俪 - 沙滩美背", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 384436, 
                "calorie_count": "60", 
                "duration_in_minute": "13", 
                "level": "1", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/B9XIKUEE-AShS-F4Lm-tC8k-sRdJEDLOJIX4.jpg", 
                "is_enrolling": 0
            }, 
            {
                "id": "1704", 
                "name": "张俪 - 性感美臀", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 399296, 
                "calorie_count": "65", 
                "duration_in_minute": "12", 
                "level": "1", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/0sx0Unu9-i0Vd-rtRS-tICV-cpxzdL8Dv8h4.jpg", 
                "is_enrolling": 0
            }, 
            {
                "id": "1698", 
                "name": "张豆豆 - 纤细美腿", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 663559, 
                "calorie_count": "70", 
                "duration_in_minute": "16", 
                "level": "2", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/yi3OKzSX-81GP-wZIF-8KWi-mAF5x1Thkcos.jpg", 
                "is_enrolling": 0
            }, 
            {
                "id": "1699", 
                "name": "张豆豆 - 蛮腰紧致", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 663064, 
                "calorie_count": "70", 
                "duration_in_minute": "16", 
                "level": "2", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/bPz3ehTL-g21W-1FBM-lTzl-4FwEJyw9IGl5.jpg", 
                "is_enrolling": 0
            }, 
            {
                "id": "1700", 
                "name": "张豆豆 - 窈窕柔韧", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 596186, 
                "calorie_count": "60", 
                "duration_in_minute": "12", 
                "level": "2", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/mFPZhPME-U8Zk-Su4R-1TbX-3wswJRrJuty9.jpg", 
                "is_enrolling": 0
            }
        ]
    }
}';
    }else if($type == 'course'){//课程详情
        $str='{
    "status": "200", 
    "hb_data_version": "1499992179", 
    "data": {
        "id": "1703", 
        "name": "张俪 - 沙滩美背", 
        "description": "背部常常是忽略练习的身体部位。背部不仅决定了身姿是否优美，也是改善各种体态问题的关键，办公族们久坐不动所导致的各种圆肩、高低肩、驼背等问题，都与不正确的坐姿和缺少背部肌群训练息息相关。
 
火辣健身携手著名演员张俪共同研发了背部训练的课程，本课程结合张俪日常背部训练方法，着重肩胛肌群及大圆肌舒展放松和训练，提拔腰背，练出沙滩美背。

关键词：美背、驼背、倒三角、背部", 
        "crowd_text": "a. 学生白领等经常伏案久坐的人群
b.想练出背部线条的训练者
c.背部力量较弱的初学者", 
        "notice": "a. 追求动作的标准用力，尽量跟上视频节奏
b.训练中采用正确的呼吸方式
c.体会背部肌群的发力感，建立肌肉记忆", 
        "suggest": "建议每周训练 3～4 次，如本课程可轻松完成，建议进阶到「维密女神 - 背部塑形」系列课程。", 
        "train_count": "0", 
        "level": "1", 
        "duration_in_minute": "13", 
        "calorie_count": "60", 
        "image": "http://source.hotbody.cn/0FyH8lGz-36up-HbTK-N05v-fPOQOvGlATDT.jpg", 
        "player_version": "3", 
        "script_url": "http://source.hotbody.cn/lesson_1703_2c05093e-a5e5-486b-9f2d-17e0352d12bd.json", 
        "trainee_count": 384428, 
        "is_hot": "0", 
        "state": "1", 
        "basic_value": "302731", 
        "equipment": "", 
        "crowd": "0", 
        "level_description": "", 
        "bodypart": "背部", 
        "is_new": "1", 
        "is_test": "0", 
        "is_rest": "0", 
        "is_yoga": "0", 
        "ship": "0", 
        "warm_up": "1", 
        "updated_at": "1499310859", 
        "is_enrolling": "0", 
        "punch_count": "352194", 
        "actions": [
            {
                "name": "课程介绍", 
                "image": "http://source.hotbody.cn/i5siHc4b-TVlz-QH0p-KhJw-ieXLLUtAqSf2.jpg", 
                "action_explain_video": "http://source.hotbody.cn/PQsFHKWr-vITK-OO3y-D2dL-MGVXuD7I5rnq.mp4", 
                "action_explain_video_size": "610711", 
                "is_title_film": "1", 
                "repeat_num": "1", 
                "other": "0", 
                "reps": ""
            }, 
            {
                "id": "1191", 
                "name": "跪姿动态伸展", 
                "image": "http://source.hotbody.cn/A2BtlkAw-NtaW-im45-aso0-Pn8udLZXDnL5.jpg", 
                "reps": "40秒", 
                "action_explain_video": "http://source.hotbody.cn/D9f6NqyZ-vBJv-AvaL-m5CE-X2cRkzFy7eV5.mp4", 
                "action_explain_video_size": "1491970", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1192", 
                "name": "侧撑单臂下拉", 
                "image": "http://source.hotbody.cn/HzKCLUxk-m4V9-ltLo-9eLF-FBk0GTVLGAG5.jpg", 
                "reps": "2 x 12次/边", 
                "action_explain_video": "http://source.hotbody.cn/4gFNnLv6-GkEr-tAhB-FhzW-6dvS0bvRmN1T.mp4", 
                "action_explain_video_size": "1345043", 
                "repeat_num": "2", 
                "other": "1193"
            }, 
            {
                "id": "1210", 
                "name": "休息", 
                "image": "http://source.hotbody.cn/icgpCb7O-fUKl-IkRG-FAn4-dnkOzxDg9TAL.jpg", 
                "reps": "30秒", 
                "action_explain_video": "http://source.hotbody.cn/rzQFctNH-nqpw-kQ09-Nbuq-tWkTz0hRCeKg.mp4", 
                "action_explain_video_size": "579598", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1194", 
                "name": "俯卧水平夹背", 
                "image": "http://source.hotbody.cn/OBZC2SPg-WeuD-Q91d-rFFC-AvG1VHt2TMZe.jpg", 
                "reps": "2 x 14次", 
                "action_explain_video": "http://source.hotbody.cn/T2TwJ89b-UFc7-gsns-df4Q-rhprOx9Oo1vd.mp4", 
                "action_explain_video_size": "739381", 
                "repeat_num": "2", 
                "other": "0"
            }, 
            {
                "id": "1212", 
                "name": "休息", 
                "image": "http://source.hotbody.cn/qJZu8C9n-N8O6-eIgD-L8hA-UOgQuPS1nftQ.jpg", 
                "reps": "20秒", 
                "action_explain_video": "http://source.hotbody.cn/yNCFbaCK-zXEI-lrkb-QSbR-PafnGTDyAP0U.mp4", 
                "action_explain_video_size": "587263", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1195", 
                "name": "俯身复合抬臂", 
                "image": "http://source.hotbody.cn/LBqJC9gB-65fs-VwC1-J6IQ-kClyaJHBnGTB.jpg", 
                "reps": "12次", 
                "action_explain_video": "http://source.hotbody.cn/6S5UCMTu-oHNN-TaqT-lPSk-T5eZWCDmUhPf.mp4", 
                "action_explain_video_size": "1104860", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1213", 
                "name": "休息", 
                "image": "http://source.hotbody.cn/K0hMMhyh-uiRm-EhhB-qpvU-kFTzvoddBuhI.jpg", 
                "reps": "20秒", 
                "action_explain_video": "http://source.hotbody.cn/264aGO3T-6iDE-h1am-mx3G-NQ9penWf05yh.mp4", 
                "action_explain_video_size": "579528", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1202", 
                "name": "俯身钟摆", 
                "image": "http://source.hotbody.cn/sTxKSbP1-9Wfh-fywx-epPs-3VfqHbLtzQDT.jpg", 
                "reps": "40秒", 
                "action_explain_video": "http://source.hotbody.cn/qEBlTI9x-bWHu-nJ2S-QTTT-VnJxd4Rf1s9r.mp4", 
                "action_explain_video_size": "1004030", 
                "repeat_num": "1", 
                "other": "0"
            }, 
            {
                "id": "1197", 
                "name": "弓箭背部伸展", 
                "image": "http://source.hotbody.cn/h1ec8L7O-NuIv-On4K-GQBp-NXaKyauZHwQP.jpg", 
                "reps": "30秒", 
                "action_explain_video": "http://source.hotbody.cn/bmzgGrkK-2WS6-n84w-hpmu-I56o9xALCfmB.mp4", 
                "action_explain_video_size": "610479", 
                "repeat_num": "1", 
                "other": "1198"
            }
        ], 
        "punch_feeds": { }, 
        "recommend": [
            {
                "id": "1704", 
                "name": "张俪 - 性感美臀", 
                "is_test": "0", 
                "is_new": "1", 
                "ship": "0", 
                "trainee_count": 399296, 
                "calorie_count": "65", 
                "duration_in_minute": "12", 
                "level": "1", 
                "type": "0", 
                "player_version": "3", 
                "image": "http://source.hotbody.cn/0sx0Unu9-i0Vd-rtRS-tICV-cpxzdL8Dv8h4.jpg", 
                "is_enrolling": 0
            }
        ]
    }
}';

    }else if($type == 'card_lest'){//课程详情中的打卡列表
        $str='{
    "feeds": [
        {
            "msg_type": "23", 
            "msg_id": "1306258", 
            "is_private": "0", 
            "created_at": "1499991471", 
            "feed_uid": "1e4c3e81-2d03-4dbb-b778-c0fa51bc3518", 
            "related_uid": "38aef7307434377b54d0510d61f722c1", 
            "like_count": 0, 
            "comment_count": 0, 
            "share_count": 0, 
            "recommend_count": 0, 
            "is_reced": 0, 
            "is_liked": 0, 
            "meta": {
                "experience": "3", 
                "group_num": "11", 
                "calorie": "90", 
                "lessons": [
                    {
                        "lesson_id": "1703", 
                        "lesson_name": "张俪 - 沙滩美背"
                    }, 
                    {
                        "lesson_id": "1552", 
                        "lesson_name": "综合热身"
                    }
                ], 
                "plan_id": "0", 
                "is_plan": "0", 
                "plan_index": "0", 
                "duration_in_second": 1080, 
                "punch_date": 181, 
                "text": "只要动起来，什么时候开始都不晚"
            }, 
            "address": "", 
            "label": ""
        }, 
        {
            "msg_type": "23", 
            "msg_id": "1305749", 
            "is_private": "0", 
            "created_at": "1499989638", 
            "feed_uid": "89f2be12-d5c6-4bf2-80a5-c37814402dfa", 
            "related_uid": "af61a22c1814e7f4fa9864ffd7fb2d59", 
            "like_count": 0, 
            "comment_count": 0, 
            "share_count": 0, 
            "recommend_count": 0, 
            "is_reced": 0, 
            "is_liked": 0, 
            "meta": {
                "experience": "3", 
                "group_num": "6", 
                "calorie": "60", 
                "lessons": [
                    {
                        "lesson_name": "张俪 - 沙滩美背", 
                        "lesson_id": "1703"
                    }
                ], 
                "plan_id": "0", 
                "is_plan": "0", 
                "plan_index": "0", 
                "duration_in_second": 780, 
                "punch_date": 27, 
                "text": "动起来吧，总不能既单身，又胖若两人"
            }, 
            "address": "", 
            "label": ""
        }, 
        {
            "msg_type": "22", 
            "msg_id": "1305724", 
            "is_private": "0", 
            "created_at": "1499989535", 
            "feed_uid": "dd0cf5d5-54f2-4cc7-9daa-1a00b2e96c59", 
            "related_uid": "721cb295f3eee9b731afee631a9d4f29", 
            "like_count": "2", 
            "comment_count": 0, 
            "share_count": 0, 
            "recommend_count": 0, 
            "is_reced": 0, 
            "is_liked": 0, 
            "meta": {
                "experience": "3", 
                "group_num": "6", 
                "calorie": "55", 
                "lessons": [
                    {
                        "lesson_name": "张俪 - 沙滩美背", 
                        "lesson_id": "1703"
                    }
                ], 
                "plan_id": "0", 
                "is_plan": "0", 
                "plan_index": "0", 
                "duration_in_second": 720, 
                "punch_date": 9, 
                "text": "只要动起来，什么时候开始都不晚", 
                "image": "http://source.hotbody.cn/FqqyqXkqS3KXcWDPmbNXF0q8OOo1", 
                "attr": {
                    "image_ratio": "0"
                }
            }, 
            "address": "", 
            "label": ""
        }, 
        {
            "msg_type": "23", 
            "msg_id": "1305655", 
            "is_private": "0", 
            "created_at": "1499989349", 
            "feed_uid": "d4cb66f5-9776-4bb1-afc9-12ee720c1f45", 
            "related_uid": "7e69ae953161280434160602fd4ee12d", 
            "like_count": 0, 
            "comment_count": 0, 
            "share_count": 0, 
            "recommend_count": 0, 
            "is_reced": 0, 
            "is_liked": 0, 
            "meta": {
                "experience": "0", 
                "group_num": "10", 
                "calorie": "66", 
                "lessons": [
                    {
                        "lesson_id": "1596", 
                        "lesson_name": "心肺入门"
                    }
                ], 
                "plan_id": "0", 
                "is_plan": "0", 
                "plan_index": "0", 
                "duration_in_second": 600, 
                "punch_date": 77, 
                "text": "只要动起来，什么时候开始都不晚"
            }, 
            "address": "", 
            "label": ""
        }, 
        {
            "msg_type": "23", 
            "msg_id": "1305415", 
            "is_private": "0", 
            "created_at": "1499988683", 
            "feed_uid": "8913f108-9bfe-43c3-8f20-a969c0e353fc", 
            "related_uid": "7e69ae953161280434160602fd4ee12d", 
            "like_count": 0, 
            "comment_count": 0, 
            "share_count": 0, 
            "recommend_count": 0, 
            "is_reced": 0, 
            "is_liked": 0, 
            "meta": {
                "experience": "0", 
                "group_num": "5", 
                "calorie": "60", 
                "lessons": [
                    {
                        "lesson_id": "1704", 
                        "lesson_name": "张俪 - 性感美臀"
                    }
                ], 
                "plan_id": "0", 
                "is_plan": "0", 
                "plan_index": "0", 
                "duration_in_second": 660, 
                "punch_date": 77, 
                "text": "只要动起来，什么时候开始都不晚"
            }, 
            "address": "", 
            "label": ""
        }
    ], 
    "users": {
        "38aef7307434377b54d0510d61f722c1": {
            "avatar": "http://fitzerolesson.oss-cn-qingdao.aliyuncs.com/2c2dbc7a-25c3-4858-a3b2-05ad813db4c8.jpg", 
            "verify": "", 
            "username": "CAROLW", 
            "uid": "d565a0d7-7b90-11e5-a6bc-008cfae40c60", 
            "is_following": 0, 
            "is_follower": 0, 
            "add_following": 0
        }, 
        "af61a22c1814e7f4fa9864ffd7fb2d59": {
            "avatar": "http://source.hotbody.cn/d06c3d74-85ab-4469-b6ec-1a8e3fb1a5b1.jpg", 
            "verify": "", 
            "username": "那些逝去的年华_2582f", 
            "uid": "2a134f3c-cf0b-4c44-8624-530227e62cdd", 
            "is_following": 0, 
            "is_follower": 0, 
            "add_following": 0
        }, 
        "721cb295f3eee9b731afee631a9d4f29": {
            "avatar": "http://source.hotbody.cn/a851a2fa-f23f-431d-ad52-29472edde404.jpg", 
            "verify": "", 
            "username": "贾琳_b1710", 
            "uid": "a51a2a4b-825c-4a12-a577-a5ffcb40b87f", 
            "is_following": 0, 
            "is_follower": 0, 
            "add_following": 0
        }, 
        "7e69ae953161280434160602fd4ee12d": {
            "avatar": "http://source.hotbody.cn/795f99af-969d-4eba-8094-432dec4539ca.jpg", 
            "verify": "", 
            "username": "LPmomo", 
            "uid": "509a54d3-bca7-4f85-a3db-78db2e1c191c", 
            "is_following": 0, 
            "is_follower": 0, 
            "add_following": 0
        }
    }
}';
    }
    echo "$str";
 ?>












