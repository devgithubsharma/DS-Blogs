import React from 'react'
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"
import { Link } from 'react-router-dom'
import {Menu} from '../components/Menu'

export function Single (){
  return (
    <div className='single'>
      <div className="content">
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" alt="" />
        <div className="user">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          <div className="info">
            <span>Vaishali</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>

          <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nostrum, dicta atque officiis molestiae a quasi illo doloremque tempore consectetur quaerat iusto quod ullam, 
        culpa id dolorum obcaecati impedit? Eum labore voluptate quibusdam aliquid, atque ipsa. Ratione temporibus 
        exercitationem nobis provident.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sapiente dolorem illum vel doloremque et tenetur quas quam placeat! 
        Aspernatur aliquid mollitia,dicta voluptates nostrum itaque officiis incidunt est eveniet veritatis!
        <br/>
        <br/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ullam praesentium quod in eveniet, nulla sit suscipit ea aperiam ex excepturi 
        facere perspiciatis debitis distinctio corporis quas velit dolor. Blanditiis odio vel voluptatibus aut, 
        quas voluptatem accusamus esse inventore, 
        laborum porro soluta maiores nostrum sit itaque harum ab ea error quos perferendis nihil iste? 
        Earum placeat mollitia quis quia possimus amet deleniti eius aut voluptates natus impedit 
        facere distinctio esse ipsam excepturi culpa vel quaerat, ducimus corporis cum quam eveniet?
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Modi blanditiis similique a animi doloribus corporis voluptate adipisci, 
        facilis ratione deserunt obcaecati, rem, tenetur dignissimos cupiditate 
        explicabo sapiente distinctio aut quasi impedit? Aperiam, impedit placeat doloremque 
        asperiores est vero fuga dolor consequuntur facilis id ipsam quo aliquid autem distinctio. 
        Modi tenetur ut quasi vitae. Eos voluptate corporis exercitationem voluptates, amet aut.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta, adipisci sequi 
        cupiditate fuga quibusdam, maiores nobis eos odio nam repudiandae sed, accusamus neque illo. 
        Corporis recusandae facere voluptas voluptatem?
        <br/>
        <br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Quae aliquam sit illo blanditiis voluptas vero hic delectus cupiditate dolorum, 
        qui molestias illum similique possimus numquam consequatur nostrum officia. 
        Quasi quis hic nesciunt itaque aperiam ut! Sed earum iste sapiente? Magni ab at beatae, 
        commodi harum id! Non architecto quisquam a eum consequatur ullam quasi nobis mollitia blanditiis modi iusto tempore doloribus porro, 
        amet harum error reiciendis eius ipsam sint explicabo placeat libero fuga minus odio! Ut cumque nam, amet nemo accusantium deserunt, 
        a saepe facilis repudiandae cum molestias aliquam sint non iste dolores! Magnam aspernatur nesciunt quidem deserunt fugiat perspiciatis 
        enim ipsa quibusdam obcaecati, laboriosam, distinctio omnis, sequi mollitia quos minima. Adipisci totam, necessitatibus esse nostrum repellendus dolore 
        rem sapiente rerum harum, 
        impedit error sunt amet molestias, facere magni. Odit neque impedit repellendus facere, non nobis eaque laborum. Facere, debitis, voluptatem id ratione aspernatur, cupiditate velit laborum vitae fugiat sint tempora repellendus nisi quas labore! Explicabo perspiciatis adipisci architecto consectetur, nobis consequatur impedit animi velit tenetur, tempore illo sit placeat fuga qui cum esse ipsa. Itaque iusto suscipit placeat sapiente rerum? Hic consequatur at eligendi doloribus labore voluptatem sapiente laborum ratione quisquam quasi sunt, 
        reiciendis beatae quibusdam iure et maiores.
      </p>
      </div>
      
      <Menu/>
    </div>
  )
}


