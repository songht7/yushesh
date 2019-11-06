class ProList extends React.Component {
		constructor(props){
			super(props);
			this.state={
				prolist:proList
			}
		}
    render() {
        return (
            <div className="__project_box __project_box--type_c">
                <div className="case1" onClick={()=>window.location.href='./pro_1.html'}>
                    <div className="scroll_header __img_box __img_box--1 size420x440 top0 left0 grid_reveal ani_delay_1" data-av-animation="self_slide_up" data-index="3"><img src="./content/product/pro_1/c1.jpg" alt=""/>
                        <div className="__img_box__text">
                            <p>主案设计 | 李宏升</p>
                            <p>项目名称 | 九江观澜盛世</p>
                            <p>项目地点 | 江西九江</p>
                            <p>施工单位 | 御舍（上海）建设工程有限公司</p>
                            <p>建筑面积 | 380平方</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ProList />,
    document.querySelector("#ProList")
);