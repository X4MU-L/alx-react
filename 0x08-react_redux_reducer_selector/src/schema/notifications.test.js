import { getAllNotificationsByUser } from './notifications.js';

describe('getAllNotificationsByUser', () => {
  it('verifies that getAllNotificationsByUser returns the right data', () => {
    const userId = '5debd764ec7c8d21449be7d7';

    const result = getAllNotificationsByUser(userId);

    // Expected data for the provided userId
    const expectedOutput = [
      {
        guid: '4cc5bc3a-98fe-4392-b97d-6a41da1d944b',
        isRead: false,
        type: 'default',
        value:
          'Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue',
      },
    ];

    expect(result).toEqual(expectedOutput);
  });
});
