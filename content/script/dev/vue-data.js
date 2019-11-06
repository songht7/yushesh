// npx babel src -d lib
new Vue({
    el: "#Wrapper",
    data: {
        ctg: "",
        proList: proList
    },
    created(e) {
        console.log("created:");
    },
    mounted(e) {
        console.log("mounted:");
        $('.grid_reveal').AniView(options);
        const that = this;
        const _ctg = that.GetUrlParam("ctg");
        that.ctg = _ctg;
        const d=that.proList.map((obj,k)=>obj.id==that.ctg);
        console.log(d);
    },
    methods: {
        winLocation(id) {
            window.location.href = '/pro_' + id + '.html';
        },
        GetUrlParam(paraName) {
            var url = window.location.toString();
            var arrObj = url.split("?");
            if (arrObj.length > 1) {
                var arrPara = arrObj[1].split("&");
                var arr;

                for (var i = 0; i < arrPara.length; i++) {
                    arr = arrPara[i].split("=");

                    if (arr != null && arr[0] == paraName) {
                        return arr[1];
                    }
                }
                return "";
            } else {
                return "";
            }
        }
    }
})