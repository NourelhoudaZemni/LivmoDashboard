import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [

  
  {
    label: 'USERS',
    isTitle: true
  },
  {
    label: 'USERS',
    icon: 'feather',
    subItems: [
      { 
          
              label: 'Client', 
              subItems: [

                {label: 'All Clients', 
       
                link: '/tables/ngx-datatable'},
               

              ]}







    ,
           
              
              
                {  label: 'Hosts', 
                            subItems: [
              
                              {label: 'All Hosts', 
                     
                              link: '/tables/hostcomponent'},

                              {label: 'All Individuals', 
                     
                              link: '/tables/hostindiv'},
                              {label: 'All organisations', 
                     
                              link: '/tables/hostorg'},

                              {label: 'HOSTS WAITING FOR VERIFICATION', 
                     
                              link: '/tables/HWV'}
                      ,
                      {label: 'VERIFIED HOST', 
                     
                      link: '/tables/HV'} ]},
              {
                label: 'Merchant', 
                
                    subItems: [
                      {label: 'All Merchants', 
             
                      link: '/tables/merchantcomponent'},

                      {label: 'Merchant en attente', 
             
                      link: '/tables/merchantEA'},
                     
      
                    ]}
                  
    ]},  
    { label: 'Experience',

    subItems: [
      {label: 'All Experiences', 

       link: '/tables/Exp',},

      ]

          },

          { label: 'Services',

          subItems: [ 
      
            {label: 'All transport', 
      
            link: '/tables/AllTransport'},
           
            {label: 'All Lodging', 
      
            link: '/tables/AllLodging'},
            
            {label: 'All food', 
      
            link: '/tables/AllFood'},]
      
                },
  {
    label: 'Reservation',
    isTitle: true
  },
 

  {
    label: 'Reservation',
    icon: 'layout',
    subItems: [
      {
        label: 'Lodging Reservation',
        subItems: [
          {
            label: 'All Lodging Reservation',
            link: '/tables/AllLodgingReservation',
          },
          {
            label: 'Pending',
            link: '/tables/AllPendingLodgingReservation',
          },
          {
            label: 'Valid ',
            link: '/tables/AllValidReservation',
          },
          {
            label: 'Invalid',
            link: '/tables/AllInvalidLodgingReservation',
          },
          {
            label: 'Paid',
            link: '/tables/AllPaidLodgingReservation',
          },
        ]},
      /////////////.
      {
        label: 'Food Reservation',
        subItems: [
          {
            label: 'All Food Reservation',
            link: '/tables/AllFoodReservation',
          },
          {
            label: 'Pending',
            link: '/tables/AllPendingFoodReservation',
          },
          {
            label: 'Valid ',
            link: '/tables/AllValidFoodReservation',
          },
          {
            label: 'Invalid',
            link: '/tables/AllInvalidFoodReservation',
          },
          {
            label: 'Paid',
            link: '/tables/AllPaidFoodReservation',
          },
        ]},
        //////////
        {
          label: 'Transport Reservation',
          subItems: [
            {
              label: 'All Transport Reservation',
              link: '/tables/AllTransportReservations',
            },
            {
              label: 'Pending',
              link: '/tables/AllPendingTransportReservation',
            },
            {
              label: 'Valid ',
              link: '/tables/AllValidTransportReservation',
            },
            {
              label: 'Invalid',
              link: '/tables/AllInvalidTransportReservation',
            },
            {
              label: 'Paid',
              link: '/tables/AllPaidTransportReservation',
            },
          ]}
      
      
      ]},
        /////////////
       
   
];
