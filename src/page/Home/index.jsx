import eu from "../../assets/imgs/eu.png"
import { DivContainer, DivImg, DivInfo, H1, P, P2, P3, Section } from "./style"
export const Home = () => {


  return (
    <Section>
      <DivContainer>
        <DivInfo>
            <P2>Oi eu Meu nome e</P2>
            <H1>MARIO LUCAS</H1>
            <P3>Desenvolvedor FullStack</P3>
            <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias modi nemo accusamus consectetur voluptatem corrupti, in, illum incidunt vero nesciunt sed excepturi. Harum, reprehenderit omnis? Iste inventore autem quae sint.</P>
          
        </DivInfo>
        <DivImg>
          <img src={eu} alt="" />
        </DivImg>
      </DivContainer>
    </Section>
  )
}


