<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;

class AuthController extends Controller
{
    protected $auth;

    public function __construct()
    {
        // Inicializa Firebase
        $factory = (new Factory)->withServiceAccount(config('firebase.credentials'));
        $this->auth = $factory->createAuth();
    }

    /**
     * Verifica el token de Firebase.
     */
    public function verifyToken(Request $request)
    {
        $token = $request->input('token');

        if (!$token) {
            return response()->json(['error' => 'Token no proporcionado'], 401);
        }

        try {
            // Verifica el token
            $verifiedIdToken = $this->auth->verifyIdToken($token);
            $uid = $verifiedIdToken->claims()->get('sub'); // Obtiene el UID del usuario
            $user = $this->auth->getUser($uid); // Obtiene los datos del usuario

            // Aquí puedes guardar el usuario en tu base de datos de Laravel si es necesario
            // Por ejemplo:
            // $localUser = User::firstOrCreate(['firebase_uid' => $uid], [
            //     'name' => $user->displayName,
            //     'email' => $user->email,
            // ]);

            return response()->json([
                'message' => 'Token válido',
                'user' => [
                    'uid' => $uid,
                    'email' => $user->email,
                    'name' => $user->displayName,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Token inválido'], 401);
        }
    }

    /**
     * Cierra la sesión del usuario.
     */
    public function logout(Request $request)
    {
        // Aquí puedes agregar lógica adicional, como eliminar el token de la base de datos
        return response()->json(['message' => 'Sesión cerrada']);
    }
}