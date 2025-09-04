import cds, { ApplicationService } from '@sap/cds';

export default class PeopleService extends ApplicationService {
  async init(): Promise<void> {
    const { Person } = this.entities;

    this.on('markAsContact', async (req) => {
      const { person } = req.data;
      const tx = cds.tx(req);

      const exists = await tx.read(Person, person);
      if (!exists) return req.error(404, 'Person not found');

      await tx.update(Person, person).set({ isContact: true });
      return `Person ${person} marked as contact`;
    });

    this.on('resetEmail', async (req) => {
      const { person } = req.data;
      const tx = cds.tx(req);

      const exists = await tx.read(Person, person);
      if (!exists) return req.error(404, 'Person not found');

      await tx.update(Person, person).set({ email: null });
      return `Email reset for person ${person}`;
    });
  }
}
