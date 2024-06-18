import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {
  users!: Observable<any[]>;
  filteredUsers: any[] = [];
  searchTerm: string = '';

  constructor(
    private firestore: AngularFirestore, 
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.users = this.firestore.collection('Users', ref => ref.where('role', '==', 'user')).valueChanges({ idField: 'id' });

    this.users.subscribe(users => {
      this.filteredUsers = users;
    });
  }

  goToDetails(user: any) {
    this.router.navigate(['/exercicios', user.id]);
  }

  async showLogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Você deseja sair?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.router.navigate(['/login-acad']);
          }
        }
      ]
    });

    await alert.present();
  }

  filterUsers(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.users.subscribe(users => {
      this.filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchTerm);
      });
    });
  }
}









