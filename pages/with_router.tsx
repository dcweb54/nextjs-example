import {withRouter} from 'next/router'

const WithRouter = withRouter(({router:{query:{id}}})=>(
    <div>
        <h1>
            welcome to withRouter api {id}
        </h1>
    </div>
))

export default WithRouter;