import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { Chart, registerables } from 'chart.js';
import { Commentaire } from 'src/app/monClasses/Commentaire';
import { Films } from 'src/app/monClasses/films';
import { Utilisateur } from 'src/app/monClasses/utilisateur';
import { CommentaireService } from 'src/app/monServices/commentaire.service';
import { FilmService } from 'src/app/monServices/film.service';
import { UtilisateurService } from 'src/app/monServices/utilisateur.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  listClient: Utilisateur[] = [];
  listPrest: Utilisateur[] = [];
  doughnutChart: any;
  listfilm: Films[];
  listCom: Commentaire[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private comService: CommentaireService, 
    private filmService: FilmService,
    private clientService: UtilisateurService
  ) {
    // Enregistrer tous les composants nécessaires de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadFilms(); 
    this.loadClient();
    this.loadCommentaire();
    this.initializeChart();
  }

  loadFilms() {
    this.filmService.listFilm().subscribe((data: Films[]) => {
      this.listfilm = data;
      this.updateChart();
    });
  }

  loadCommentaire() {
    this.comService.listCommentaire().subscribe((data: Commentaire[]) => {
      this.listCom = data;
      this.updateChart();
    });
  }

  loadClient() {
    this.clientService.getAllUtilisateur().subscribe((data: Utilisateur[]) => {
      this.listClient = data;
      this.updateChart();
    });
  }

  initializeChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Clients', 'Films', 'Commentaires'],
        datasets: [{
          label: 'Count',
          data: [0, 0, 0], // Initial data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += context.parsed;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  updateChart() {
    if (this.doughnutChart) {
      this.doughnutChart.data.datasets[0].data = [
        this.listClient.length,
        this.listCom.length,
        this.listfilm.length
      ];
      this.doughnutChart.update();
    }
  }
}
