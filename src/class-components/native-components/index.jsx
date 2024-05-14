import * as S from "./styles";

function CreativeCard(props){
    return(
        <S.Container>
                <S.CardContainer>
                    <S.CardTitle>{props.title}</S.CardTitle>
                    <S.CardSubtitle>{props.description}</S.CardSubtitle>
                </S.CardContainer>
        </S.Container>
    );
}


export default function CreativeComponent () {
    return(
        <S.Container>
            <CreativeCard title="oi" description= "dededed"/>
            <CreativeCard title="hi" description= "tututu"/>
            <CreativeCard title="ohaio" description= "cavalo"/>
            <CreativeCard title="zas" description= "dinossauro"/>
        </S.Container> 

    );
};