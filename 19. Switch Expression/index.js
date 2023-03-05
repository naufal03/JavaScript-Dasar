const nilai = 'A';

switch (nilai) {
	case 'A':
		console.info('Anda Lulus Dengan Baik');
		break;
	case 'B':
	case 'C':
		console.info('Anda Lulus');
		break;
	case 'D':
		console.info('Anda Tidak Lulus');
		break;
	default:
		console.info('Coba Lagi');
		break;
}
