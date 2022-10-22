const Post = (props) => { 
    return(
        <div className="post mx-2">
            <div className="img-post"></div>
            <h5>{props.subtitle}</h5>
             <h3>{props.title}</h3>
             <p>{props.children}</p>
             <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="desc-profile ml-2">
                    <h6 className="color-blue">Daniel Lopes</h6>
                    <p> Oct 21, 2022 - 8 min read</p>
                </div>
             </div>
        </div>
    );
}

export default Post;