Vue.component('top-header', {
    template: '<div><div id="new_header_container" class="page_detail pc_block">\
                    <div class="nmbHover">\
                        <div class="top_logo" onClick="window.location.href=\'index.html\'"><img src="./content/images/logo.png" alt="" /></div>\
                        <ul class="sub_nav">\
                            <li>\
                                <a href="index.html"><span>作品11</span></a>\
                                <ul class="nav_sub">\
                                    <li><a href="index.html?ctg=1"><span>私宅、样板房、别墅</span></a></li>\
                                    <li><a href="index.html?ctg=2"><span>会所、售楼处</span></a></li>\
                                    <li><a href="index.html?ctg=3"><span>酒店</span></a></li>\
                                    <li><a href="index.html?ctg=4"><span>办公</span></a></li>\
                                    <li><a href="index.html?ctg=5"><span>商业空间</span></a></li>\
                                </ul>\
                            </li>\
                            <li><a href="introduction.html"><span>简介</span></a></li>\
                            <li><a href="job.html"><span>招聘</span></a></li>\
                            <li><a href="contact.html"><span>联系我们</span></a></li>\
                        </ul>\
                    </div>\
                </div>\
                <div id="new_header_containerex" class="page_detail pc_block">\
                    <div class="nmbHover">\
                        <div class="top_logo" onClick="window.location.href=\'index.html\'"></div>\
                        <ul class="sub_nav">\
                            <li>\
                                <a href="index.html"><span>作品</span></a>\
                                <ul class="nav_sub">\
                                    <li><a href="index.html?ctg=1"><span>私宅、样板房、别墅</span></a></li>\
                                    <li><a href="index.html?ctg=2"><span>会所、售楼处</span></a></li>\
                                    <li><a href="index.html?ctg=3"><span>酒店</span></a></li>\
                                    <li><a href="index.html?ctg=4"><span>办公</span></a></li>\
                                    <li><a href="index.html?ctg=5"><span>商业空间</span></a></li>\
                                </ul>\
                            </li>\
                            <li><a href="introduction.html"><span>简介</span></a></li>\
                            <li><a href="job.html"><span>招聘</span></a></li>\
                            <li><a href="contact.html"><span>联系我们</span></a></li>\
                        </ul>\
                    </div>\
                </div>\
                <div id="mobile_header_container" class="mobile_block">\
                    <div class="mobile_top_logo" onClick="window.location.href=\'index.html\'"><img src="./content/images/logo.png" alt="" /></div>\
                    <div id="sub_nav_bts">\
                        <i></i>\
                        <i></i>\
                        <i></i>\
                    </div>\
                    <div id="mobile_sub_nav_page">\
                        <div class="sub_nav_list" id="sub_nav_list">\
                            <div class="mobile_top_logo"></div>\
                            <ul>\
                                <li class="tri_delay_1">\
                                    <a href="index.html">作品</a>\
                                    <ul class="nav_sub_m">\
                                        <li><a href="index.html?ctg=1"><span>私宅、样板房、别墅</span></a></li>\
                                        <li><a href="index.html?ctg=2"><span>会所、售楼处</span></a></li>\
                                        <li><a href="index.html?ctg=3"><span>酒店</span></a></li>\
                                        <li><a href="index.html?ctg=4"><span>办公</span></a></li>\
                                        <li><a href="index.html?ctg=5"><span>商业空间</span></a></li>\
                                    </ul>\
                                </li>\
                                <li class="tri_delay_2"><a href="introduction.html">简介</a></li>\
                                <li class="tri_delay_4"><a href="job.html">招聘</a></li>\
                                <li class="tri_delay_3"><a href="contact.html">联系我们</a></li>\
                            </ul>\
                        </div>\
                        <div class="sub_nav_bg" id="sub_nav_bg"></div>\
                    </div>\
                </div>\
                <div id="hide_banner_top" class="mobile_block close">\
                    <div class="_nmb">\
                        <div class="table_father">\
                            <div class="table_child"></div>\
                        </div>\
                    </div>\
                </div>\
            </div>',
    data: function() {
        return {}
    }
})

Vue.component('mobile-share', {
    template: '<div class="mobile_share_container"><div class="share_grid wechat" style="margin-left: 0"></div></div>',
    data: function() {
        return {}
    }
})

Vue.component('footer', {
    template: '<div class="foot">\
                <div id="new_footer_container" class="pc_block">\
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>\
                </div>\
                <div id="mobile_footer_container" class="mobile_block border-top-1px">\
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>\
                </div>\
            </div>',
    data: function() {
        return {}
    }
})
