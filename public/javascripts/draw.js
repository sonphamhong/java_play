$(document).ready(function(){
	var sys = arbor.ParticleSystem(10000,100,1);
	sys.parameters({gravity:true});
	sys.renderer = Renderer("#viewport") ;
	var data = {
		nodes:{
			animals:{'color':'red','shape':'dot','label':'Animals'},
			dog:{'color':'green','shape':'dot','label':'dog'},
			cat:{'color':'blue','shape':'dot','label':'cat'},
			user1:{'color':'blue','shape':'dot','label':'user1'},
			user2:{'color':'blue','shape':'dot','label':'user2'},
			user3:{'color':'blue','shape':'dot','label':'user3'},
			user4:{'color':'blue','shape':'dot','label':'user4'},
			user5:{'color':'blue','shape':'dot','label':'user5'},
			user6:{'color':'blue','shape':'dot','label':'user6'},
			user7:{'color':'blue','shape':'dot','label':'user7'},
			user8:{'color':'blue','shape':'dot','label':'user8'},
			user9:{'color':'blue','shape':'dot','label':'user9'},
			user10:{'color':'blue','shape':'dot','label':'user10'},
			user11:{'color':'blue','shape':'dot','label':'user11'},
			user12:{'color':'blue','shape':'dot','label':'user12'},
			user13:{'color':'blue','shape':'dot','label':'user13'},	
			user14:{'color':'blue','shape':'dot','label':'user14'},
			user15:{'color':'blue','shape':'dot','label':'user15'},
			user16:{'color':'blue','shape':'dot','label':'user16'},
			user17:{'color':'blue','shape':'dot','label':'user17'},
			user18:{'color':'blue','shape':'dot','label':'user18'},
			user19:{'color':'blue','shape':'dot','label':'user19'},
			user20:{'color':'blue','shape':'dot','label':'user20'},
		},
		edges:{
			animals:{ dog:{}, cat:{} },
			user1:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true} },
			user2:{user1:{directed: true}, user12:{directed: true}, user5:{directed: true}},
			user3:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user4:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user5:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user6:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user7:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user8:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user9:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user10:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user11:{user2:{directed: true}, user3:{directed: true}, user4:{directed: true}},
			user12:{user4:{directed: true}, user13:{directed: true}, user20:{directed: true}},
			
			
		}
	};
	sys.graft(data);
	
})