
export default function Login(){
    return(
    <div class="row justify-content-center">

        <div class="col-4 mt-5 mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword"/>

            <input class="btn btn-primary mt-3" type="submit" value="Login"/>
        </div>
    </div>

    

    )
}