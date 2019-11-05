var login = new Vue({
    el: "#main_container",
    data: {
        ctg: "",
        proList: proList
    },
    created(e) {
        console.log("created:");
    },
    mounted(e) {
        console.log("mounted:");
        console.log(this.proList);
        const _ctg = this.GetUrlParam("ctg");
        this.ctg = _ctg;
        $('.grid_reveal').AniView(options);
    },
    methods: {
        filerPro() {},
        winLocation(id){
            window.location.href='/pro_'+id+'.html';
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