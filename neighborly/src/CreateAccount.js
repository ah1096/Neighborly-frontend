
export default function CreateAccount(){
    return(

//EMAIL AND PASSWORD INPUTS
    <div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="emailinput" placeholder="name@example.com"/>
        </div>

        <div class="mb-3">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <input type="password" class="form-control" id="paswordinput"/>
        </div>

{/* //USERNAME INPUT */}

<div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Username</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
        </div>



{/* //FIRST AND LAST NAME INPUT */}

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">First Name</label>
            <textarea class="form-control" id="firstnameinput" rows="1"></textarea>
        </div>

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Last Name</label>
            <textarea class="form-control" id="lastnameinput" rows="1"></textarea>
        </div>


{/* //BUILD A PROFILE */}

        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Bio</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <select class="form-select" id="roleinput">
            <option selected>Select a role tag</option>
            <option value="1" data-bs-toggle="tooltip" data-bs-placement="right" 
            data-bs-title="Don't want to commit to a role? Choose this default tag!">
                User</option>

            <option value="2"data-bs-toggle="tooltip" data-bs-placement="right" 
            data-bs-title="For people that make things.">
                Maker</option>

            <option value="3" data-bs-toggle="tooltip" data-bs-placement="right" 
            data-bs-title="A tag for people that can repair things.">
                Fixer</option>

            <option value="4" data-bs-toggle="tooltip" data-bs-placement="right" 
            data-bs-title="Want to pass on your skills? Choose this tag.">
                Teacher</option>

            <option value="5" data-bs-toggle="tooltip" data-bs-placement="right" 
            data-bs-title="For people that can assist with tasks or provide physical labor.">
                Helper</option>
        </select>



</div>
    )
}