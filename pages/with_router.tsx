import {withRouter} from 'next/router'

const WithRouter = withRouter(({router:{query:{id}}})=>(
    <div>
        <h1>
            welcome to withRouter api {id}
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet sequi recusandae facilis, a consequuntur voluptatum provident ad repellat, illum soluta autem tempora, eligendi laboriosam. Aperiam atque nihil possimus cum?
        </p>
    </div>
))

export default WithRouter;