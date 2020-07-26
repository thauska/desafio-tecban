import HTTPClient from './http';
import qs from 'qs';

export async function startAuthentication(bankId) {
	try {
		const config = {
			method: 'get',
			url: `/startAuthentication/${bankId}`,
			headers: {},
		};

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function bicosGet(idOrType) {
	try {
		const config = {
			method: 'get',
			url: `/bicos/${idOrType}`,
			headers: {},
		};

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function peddingBicosGet(userId) {
	try {
		const config = {
			method: 'get',
			url: `/pedding/bico/${userId}`,
			headers: {}
		};

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function transactionsGet(id) {
	try {
		const config = {
			method: 'get',
			url: `/transactions/get/${id}`,
			headers: {}
		};

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function bicoDone(id) {
	try {
		const config = {
			method: 'get',
			url: `/done/bico/${id}`,
			headers: {}
		};

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}

export async function bicosAdd(name, photo, description, type) {
	try {
		const data = qs.stringify({
			'name': name,
			'photo': photo,
			'description': description,
			'type': type
		 })

		const config = {
			method: 'post',
			url: `/bicos/add`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data
		}

		const response = await HTTPClient(config);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}