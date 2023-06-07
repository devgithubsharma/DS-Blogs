import React from 'react'
import { Link } from 'react-router-dom'
export function Home(){
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://ucarecdn.com/77a0b106-58ab-4405-b93e-43863579d05c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://www.foodunfolded.com/media/images/in-article-1-naturalfoods.jpg"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laboriosam?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur ad beatae illo, maiores ab quos molestiae fugiat libero tempore, perferendis aspernatur vitae perspiciatis nam expedita. Facilis assumenda sint beatae quia.",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    }
  ]
  return (
    <div className='home'>
      <div className="posts">
      {posts.map((post)=>(
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}


