<?php

namespace App\Http\Controllers;

use App\Models\ofllineRoom;
use Illuminate\Http\Request;

class OfflineRoomController extends Controller
{
    public function index()
    {
        $players = ofllineRoom::all();
        return response()->json($players);
    }



    public function removePlayer($id)
    {
        $user = ofllineRoom::findOrFail($id);

        $user->delete();

        return response()->json(['message' => 'Player deleted successfully']);
    }




    public function addOfflinePlayer(Request $request)
    {
        $playerCount = ofllineRoom::count();

        if ($playerCount >= 10) {
            return response()->json(['message' => 'Player limit exceeded'], 422);
        }

        $name = $request->input('player');

        $user = ofllineRoom::create([
            'player' => $name,
        ]);

        return response()->json($user, 201);

    }

}
