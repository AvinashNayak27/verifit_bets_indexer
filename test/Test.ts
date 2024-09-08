import assert from "assert";
import { 
  TestHelpers,
  GoalBetting_CreatedBetEvent
} from "generated";
const { MockDb, GoalBetting } = TestHelpers;

describe("GoalBetting contract CreatedBetEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for GoalBetting contract CreatedBetEvent event
  const event = GoalBetting.CreatedBetEvent.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("GoalBetting_CreatedBetEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await GoalBetting.CreatedBetEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualGoalBettingCreatedBetEvent = mockDbUpdated.entities.GoalBetting_CreatedBetEvent.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedGoalBettingCreatedBetEvent: GoalBetting_CreatedBetEvent = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      betId: event.params.betId,
      user: event.params.user,
      minSteps: event.params.minSteps,
      startTimestamp: event.params.startTimestamp,
      endTimestamp: event.params.endTimestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualGoalBettingCreatedBetEvent, expectedGoalBettingCreatedBetEvent, "Actual GoalBettingCreatedBetEvent should be the same as the expectedGoalBettingCreatedBetEvent");
  });
});
