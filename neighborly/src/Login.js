
export default function Login(){
    return(
    <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

        <div class="mb-3">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword"/>
        </div>
    </div>

    )
}