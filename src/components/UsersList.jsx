const UsersList = ({usersList, deleteUser, selectUser}) => {

    return(
        <section>-
            <h1>USUARIOS</h1>
            <div className="list-container">
                
                    {
                        usersList?.map(users =>(
                            <div key={users.id} className="users-container">
                                <h2>{users.first_name} {users.last_name}</h2>
                                <h3 className="correo">CORREO</h3>
                                <h3>{users.email}</h3>
                                <h3 className="correo">CUMPLEAÑOS</h3>
                                <h3><span class="material-symbols-outlined">
                                redeem
                                </span> {users.birthday}</h3>
                                
                               <div className="button-container"> 
                                <button 
                                    onClick={()=> 
                                        deleteUser(users.id)}
                                    ><span class="material-symbols-outlined">
                                    delete
                                    </span></button>
                                    
                                    <button
                                    onClick={() => selectUser(users)}
                                    ><span class="material-symbols-outlined">
                                    stylus
                                    </span>
                                    </button> 
                                </div>       
                            </div>
                            
                        ))
                    }
                
            </div>
        </section>
    )
}

export default UsersList
