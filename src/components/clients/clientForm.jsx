function ClientForm(){

    return(
        <form action="http://localhost:4000/api/clients" method="post">
            <label>* nombre</label>
            <input type="text" name="name"/> <br />
            
            <label>* es cliente de monza</label>
            <input type="checkbox" name="isOfMonza"/> <br />
            
            <label>* ciudad</label>
            <input type="text" name="city"/> <br />
            
            <label>* phone</label>
            <input type="number" name="phone"/>

            <label>email</label>
            <input type="text" name="facebook"/>
            
            <label>facebook</label>
            <input type="text" name="email"/> <br />
            <input type="submit" value="SUBIR" />
        </form>
    )
}

export default ClientForm