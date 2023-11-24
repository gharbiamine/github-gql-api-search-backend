import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getRepositoriesQuery } from './utils/getRepositoriesQuery';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getUserFromGithub(username: string) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
      'content-type': 'application/json',
    };
    const options = {
      method: 'POST',
      url: process.env.BASE_URL,
      data: {
        query: getRepositoriesQuery,
        variables: {
          limit: 20,
          username: username,
        },
      },
    };

    const request = await axios.request(options);

    return request.data.data;
  }
}
