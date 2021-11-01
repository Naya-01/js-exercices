class Film{
    constructor(nom,duree,budget,lien) {
        this.nom=nom;
        this.duree=duree;
        this.budget=budget;
        this.lien=lien;
    }
    getNom(){
        return this.nom;
    }
    getDuree(){
        return this.duree;
    }
    getBudget(){
        return this.budget;
    }
    getLien(){
        return this.lien;
    }
}
export default Film;