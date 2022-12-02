
export default function CreateAccount(){
    return(


    <div class="row justify-content-center">

        <div class="col-4">
{/* //EMAIL AND PASSWORD INPUTS */}
            <div class="mt-5 mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailinput" placeholder="name@example.com"/>
            </div>

            <div class="mb-3">
                <label for="inputPassword" class="form-label">Create password</label>
                <input type="password" class="form-control" id="passwordinput"/>
            </div>

            <div class="mb-3">
                <label for="inputPassword" class="form-label">Re-enter password</label>
                <input type="password" class="form-control" id="passwordinput2"/>
            </div>

{/* //USERNAME INPUT */}

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Username</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
            </div>



{/* //FIRST AND LAST NAME INPUT */}

            <div class="input-group mb-3">
                <span class="input-group-text">First & last name</span>
                <input type="text" aria-label="First name" class="form-control"/>
                <input type="text" aria-label="Last name" class="form-control"/>
            </div>


    {/* //BUILD A PROFILE */}


            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>


            <select class="mb-3 form-select" id="roleinput">
                <option selected>Select a role tag</option>
    {/* figure out how to add tooltips to give description of role tag on hover */}
                <option value="1">
                    User</option>

                <option value="2">
                    Maker</option>

                <option value="3">
                    Fixer</option>

                <option value="4">
                    Teacher</option>

                <option value="5">
                    Helper</option>
            </select>

        <input class="btn btn-primary" type="submit" value="Create Account"/>
    </div>
</div>
    )
}