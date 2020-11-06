import { Router } from 'express';
import { getMemberList, getMember } from 'dals/member';
import {
  mapMemberFromModelToApi,
  mapMemberListFromModelToApi,
} from './member.mappers';

export const memberApi = Router();

memberApi.get('/', async (req, res) => {
  try {
    const memberList = await getMemberList();
    res.send(mapMemberListFromModelToApi(memberList));
  } catch (error) {
    res.sendStatus(400);
  }
});

memberApi.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const member = await getMember(+id);

    res.send(mapMemberFromModelToApi(member));
  } catch (error) {
    res.sendStatus(400);
  }
});
