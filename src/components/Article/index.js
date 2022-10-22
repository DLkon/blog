import Post from "../Post";
 const Article = () => {
    return(
        <section className="container">
        
        <div className="mt-5 container-posts">
        <Post title="anime" subtitle="Do it Yourself se sai bem na estreia">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatum nobis eligendi impedit sequi ullam non earum cupiditate expedita? Suscipit vel iste nam atque officia maxime non magni, ipsum aliquid
        </Post>
        <Post  title="ligth novel" subtitle="A novel de mushoku chega ao fim">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatum nobis eligendi impedit sequi ullam non earum cupiditate expedita? Suscipit vel iste nam atque officia maxime non magni, ipsum aliquid
        </Post>
        <Post  title="manga" subtitle="Novo manga Tsukhime anunciado">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptatum nobis eligendi impedit sequi ullam non earum cupiditate expedita? Suscipit vel iste nam atque officia maxime non magni, ipsum aliquid
        </Post>
        </div>
        </section>
    );
}
export default Article;