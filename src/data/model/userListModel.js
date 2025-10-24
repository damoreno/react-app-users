export class UserListModel{
    constructor(uuid, name, email, img, rol, permissions, state, google)
    {
        this.uuid = uuid;
        this.name = name;
        this.email = email;
        this.img = img;
        this.rol = rol;
        this.permissions = permissions;
        this.state = state;
        this.google = google;
    }
}