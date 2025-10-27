export class UserListModel{
    constructor(user)
    {
        this.uid = user.uid;
        this.name = user.name;
        this.email = user.email;
        this.img = user.img;
        this.rol = user.rol;
        this.state = user.state;
        this.google = user.google;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;    
    }
}