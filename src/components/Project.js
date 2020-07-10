import React from 'react';

// https://www.youtube.com/watch?v=taMJct5oeoI
const Project = ({name, image, link, repository}) => {
  
  return (
      <section class="col-sm-12 col-md-12 col-lg-4 card-text-center">
        <article class="card">
        {/* <article class="card mb-3"> */}
          <div class="row">
            <figcaption class="col-md-12">
              <img src={image} className="card-img-top" alt="Marc Strong"></img>
            </figcaption>
            <div class="col-md-12">
              <summary class="project card-body">
                <h5 class="card-title text-center"><strong>{name}</strong></h5>
                <a href={link}>Link:  {name}</a>
                <br></br>
                <a href={repository}>{name} Repository</a>
              </summary>
            </div>
          </div>
        </article>
      </section>
  )
}

export default Project;